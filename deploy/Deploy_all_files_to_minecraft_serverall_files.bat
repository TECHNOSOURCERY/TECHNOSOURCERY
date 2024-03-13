@echo off
setlocal

rem バッチファイルのディレクトリを取得
set "SCRIPT_DIR=%~dp0"

rem Rubyプログラムを実行
ruby "%SCRIPT_DIR%server_sync_all_files.rb"

endlocal
