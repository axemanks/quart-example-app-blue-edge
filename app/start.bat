@echo off
set VENV=..\.venv
set BACKEND=backend
set REQS=%BACKEND%\requirements.txt

if not exist %VENV% (
    echo Creating virtual environment...
    python -m venv %VENV%
)

set VENV_PY=%VENV%\Scripts\python.exe

echo Installing requirements...
"%VENV_PY%" -m pip install -r %REQS%

echo Starting app service with Hypercorn...
"%VENV_PY%" "%BACKEND%\start_appservice.py"
