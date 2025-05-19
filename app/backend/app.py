import logging
from dotenv import load_dotenv
from quart import Quart
from blueprints.ping_example import ping_example_blueprint
from blueprints.static import static_blueprint
from blueprints.langchain_routes import langchain_bp
from blueprints.name import name_bp

# Load environment variables from .env
load_dotenv()


# Logging setup
logger = logging.getLogger("quart_example_app")
logger.setLevel(logging.INFO)
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
formatter = logging.Formatter('[%(asctime)s] [%(levelname)s] [%(name)s] %(message)s')
console_handler.setFormatter(formatter)
if not logger.hasHandlers():
    logger.addHandler(console_handler)

app = Quart(__name__)

# Register blueprints
app.register_blueprint(ping_example_blueprint)
app.register_blueprint(static_blueprint)
app.register_blueprint(langchain_bp)
app.register_blueprint(name_bp)

if __name__ == "__main__":
    app.run(debug=True)
