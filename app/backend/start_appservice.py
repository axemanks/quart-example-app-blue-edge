import subprocess
import sys

if __name__ == "__main__":
    # Run Hypercorn with the Quart app
    sys.exit(subprocess.call([sys.executable, "-m", "hypercorn", "app:app", "--bind", "127.0.0.1:8000"]))
