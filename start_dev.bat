@echo off
title Spydomon (Dev Mode)
cd /d "%~dp0"

if not exist "node_modules" (
    echo Installing dependencies, this only happens once...
    call npm install
)

echo Starting Spydomon...
call npm start
