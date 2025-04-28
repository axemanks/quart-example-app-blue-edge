# PowerShell startup script for Quart app with Hypercorn
$venvPath = "..\.venv"
$backendPath = "backend"
$requirements = "$backendPath\requirements.txt"

if (!(Test-Path $venvPath)) {
    Write-Host "Creating virtual environment..."
    python -m venv $venvPath
}

$venvPython = "$venvPath\Scripts\python.exe"

Write-Host "Installing requirements..."
& $venvPython -m pip install -r $requirements

Write-Host "Starting app service with Hypercorn..."
& $venvPython "$backendPath\start_appservice.py"
