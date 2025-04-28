from quart import Quart
from blueprints.main import main_blueprint

app = Quart(__name__)

# Register blueprints
app.register_blueprint(main_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
