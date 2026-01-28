@echo off
echo Starting server... > status.txt
npm run dev > server_output.txt 2>&1
echo Server stopped >> status.txt
