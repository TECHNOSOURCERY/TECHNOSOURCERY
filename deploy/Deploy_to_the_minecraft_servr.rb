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
  ftp.putbinaryfile(local_filepath, remote_filepath)
  logger.info("Uploaded: #{local_filepath} -> #{remote_filepath}")
end
# ディレクトリをアップロード
def upload_directory(ftp, local_dir, remote_dir, exclude_list, logger, base_dir)
  Dir.foreach(local_dir) do |entry|
    next if ['.', '..'].include?(entry)
    local_path = File.join(local_dir, entry)
    remote_path = File.join(remote_dir, entry)
    # ファイルの完全なパスを取得
    absolute_path = File.expand_path(local_path)
    # ベースディレクトリからの相対パスを抽出
    relative_path = Pathname.new(absolute_path).relative_path_from(Pathname.new(base_dir)).to_s
    # 入力パスが除外リストに一致するかを確認
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
config = YAML.load_file('config.yml')
# ベースディレクトリを事前に取得
base_dir = File.expand_path(config['local_dir_to_upload'])
# ftp接続情報を取得
ftp_config = config['ftp']
# FTPに接続し、指定したディレクトリをアップロード
Net::FTP.open(ftp_config['host'], ftp_config['user'], ftp_config['password']) do |ftp|
  ftp.passive = true
  logger.info("Started FTP upload to #{ftp_config['host']}")
  upload_directory(ftp, base_dir, config['remote_dir_to_upload_to'], config['exclude_list'], logger, base_dir)
  logger.info("FTP upload completed successfully.")
end
logger.close