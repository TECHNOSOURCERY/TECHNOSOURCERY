require 'net/ftp'
require 'yaml'
def upload_file(ftp, local_filepath, remote_filepath)
  file_size = File.size(local_filepath)
  uploaded_size = 0
  #進捗がわかるようMB単位でログを出力
  File.open(local_filepath, 'rb') do |file|
    ftp.storbinary("STOR #{remote_filepath}", file, Net::FTP::DEFAULT_BLOCKSIZE) do |data|
      uploaded_size += data.size
      progress_percent = (uploaded_size.to_f / file_size) * 100
      remaining_size_mb = (file_size - uploaded_size) / 1024.0 / 1024.0
      print "\rUploading #{File.basename(local_filepath)}: #{progress_percent.round(2)}% (Remaining: #{remaining_size_mb.round(2)}MB)"
    end
  end
  puts "" # 改行を追加
end
def excluded?(path, exclude_list)
  exclude_list.any? {|excluded_item| path[/(^|\/)#{Regexp.escape(excluded_item)}(\/|$)/]}
end

def upload_directory(ftp, local_dir, remote_dir, exclude_list)
  Dir.foreach(local_dir) do |entry|
    next if ['.', '..'].include?(entry)
    local_path = File.join(local_dir, entry)
    remote_path = File.join(remote_dir, entry)
    if File.directory?(local_path)
      next if excluded?(local_path, exclude_list)
      begin
        puts "Creating directory : " + remote_path
        ftp.mkdir(remote_path)
      rescue Net::FTPPermError
        # サーバー上にディレクトリがあればそのまま実行
      end
      upload_directory(ftp, local_path, remote_path, exclude_list)
    else
      next if excluded?(local_path, exclude_list)
      upload_file(ftp, local_path, remote_path)
    end
  end
end
# YAMLからコンフィグをロード
config = YAML.load_file('config.yml')
Net::FTP.open(config['ftp']['host'], config['ftp']['user'], config['ftp']['password']) do |ftp|
  ftp.passive = true
  upload_directory(ftp, config['local_dir_to_upload'], config['remote_dir_to_upload_to'], config['exclude_list'])
end