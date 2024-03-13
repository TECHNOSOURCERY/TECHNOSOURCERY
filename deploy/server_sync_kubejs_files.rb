require 'net/ftp'
require 'yaml'
require 'logger'
require 'pathname'
# ログファイルの設定
logger = Logger.new('ftp_upload.log', 'daily')
logger.level = Logger::INFO
# コンソールにも出力
logger.formatter = proc do |severity, datetime, progname, msg|
  puts "#{severity}: #{msg}" # コンソール出力フォーマットを設定
  "#{severity}: #{msg}\n"  # ログファイル出力フォーマットを設定
end
# グローバル変数の初期化
$upload_stats = { size_remaining: 0, files_remaining: 0 }
# 完全なパスが除外リストに含まれるか判定するメソッド
def excluded?(entry, base_dir, exclude_list)
  exclude_list.any? do |pattern|
    full_pattern = File.join(base_dir, pattern)
    File.fnmatch?(full_pattern, entry, File::FNM_PATHNAME) ||
    File.fnmatch?(File.join(full_pattern, '**', '*'), entry, File::FNM_PATHNAME)
  end
end
# ディレクトリがFTPサーバーに存在するかチェック
def directory_exists?(ftp, dir)
  ftp.chdir(dir)
  true
rescue Net::FTPPermError
  false
end
# ファイルをアップロード
def upload_file(ftp, local_filepath, remote_filepath, logger)
  filesize = File.size(local_filepath)
  ftp.putbinaryfile(local_filepath, remote_filepath) do |data|
    $upload_stats[:size_remaining] -= data.size
    logger.info("Uploading: #{local_filepath} - #{'%.2f' % ($upload_stats[:size_remaining].to_f / 1_000_000)}MB remaining.")
  end
  $upload_stats[:files_remaining] -= 1
  logger.info("Uploaded: #{local_filepath} -> #{remote_filepath} - #{$upload_stats[:files_remaining]} files remaining.")
end
# 指定ディレクトリ内のファイルサイズの合計とファイル数の合計を取得
def get_directory_size_and_count(path, exclude_list, base_dir)
  size = 0
  count = 0
  Dir.glob(File.join(path, '**', '*'), File::FNM_DOTMATCH).each do |file|
    next if File.directory?(file)
    absolute_path = File.expand_path(file)
    next if excluded?(absolute_path, base_dir, exclude_list)
    size += File.size(file)
    count += 1
  end
  {size: size, count: count}
end
# ディレクトリをアップロード
def upload_directory(ftp, local_dir, remote_dir, exclude_list, logger, base_dir)
  Dir.foreach(local_dir) do |entry|
    next if ['.', '..'].include?(entry)
    local_path = File.join(local_dir, entry)
    remote_path = File.join(remote_dir, entry)
    absolute_path = File.expand_path(local_path)
    next if excluded?(absolute_path, base_dir, exclude_list)
    if File.directory?(local_path)
      unless directory_exists?(ftp, remote_path)
        ftp.mkdir(remote_path)
        logger.info("Created directory: #{remote_path}")
      end
      upload_directory(ftp, local_path, remote_path, exclude_list, logger, base_dir)
    else
      upload_file(ftp, local_path, remote_path, logger)
    end
  end
end
# 設定ファイルを読み込む
config = YAML.load_file('only_kubejs.yml')
# ベースディレクトリを事前に取得
base_dir = File.expand_path(config['local_dir_to_upload'])
# ftp接続情報を取得
ftp_config = config['ftp']
# FTPに接続し、指定したディレクトリをアップロード
Net::FTP.open(ftp_config['host'], ftp_config['user'], ftp_config['password']) do |ftp|
  ftp.passive = true
  logger.info("Started FTP upload to #{ftp_config['host']}")
  # アップロード対象の合計サイズとファイル数を取得
  stats = get_directory_size_and_count(base_dir, config['exclude_list'], base_dir)
  $upload_stats[:size_remaining] = stats[:size]
  $upload_stats[:files_remaining] = stats[:count]
  logger.info("Total upload size: #{'%.2f' % (stats[:size].to_f / 1_000_000)}MB in #{stats[:count]} files.")
  upload_directory(ftp, base_dir, config['remote_dir_to_upload_to'], config['exclude_list'], logger, base_dir)
  logger.info("FTP upload completed successfully.")
end
logger.close