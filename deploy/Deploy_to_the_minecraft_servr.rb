require 'net/ftp'
require 'yaml'

# ファイルアップロード
def upload_file(ftp, local_filepath, remote_filepath)
  file_size = File.size(local_filepath)
  uploaded_size = 0
  File.open(local_filepath, 'rb') do |file|
    #プログレスをMB単位で出力
    ftp.storbinary("STOR #{remote_filepath}", file, Net::FTP::DEFAULT_BLOCKSIZE) do |data|
      uploaded_size += data.size
      progress_percent = (uploaded_size.to_f / file_size) * 100
      remaining_size_mb = (file_size - uploaded_size) / 1024.0 / 1024.0
      print "\rUploading #{File.basename(local_filepath)}: #{progress_percent.round(2)}% (Remaining: #{remaining_size_mb.round(2)}MB)"
    end
  end
  puts "" # 改行を追加
end

#ディレクトリ検知
def upload_directory(ftp, local_dir, remote_dir, exclude_list = [])
  Dir.foreach(local_dir) do |entry|
    next if entry == '.' || entry == '..' || exclude_list.include?(entry)
    local_path = File.join(local_dir, entry)
    remote_path = File.join(remote_dir, entry)
    if File.directory?(local_path)
      begin
        ftp.mkdir(remote_path)
      rescue Net::FTPPermError
        # Ignore if the directory already exists
      end
      upload_directory(ftp, local_path, remote_path, exclude_list)
    else
      upload_file(ftp, local_path, remote_path)
    end
  end
end

# 設定ファイルを読み込む
config = YAML.load_file('config.yml')
Net::FTP.open(config['ftp']['host'], config['ftp']['user'], config['ftp']['password']) do |ftp|
  ftp.passive = true
  upload_directory(ftp, config['local_dir_to_upload'], config['remote_dir_to_upload_to'], config['exclude_list'])
end