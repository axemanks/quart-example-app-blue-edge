from quart import Quart
from blueprints.ping_example import ping_example_blueprint
from blueprints.static import static_blueprint

app = Quart(__name__)

# Register blueprints
app.register_blueprint(ping_example_blueprint)
app.register_blueprint(static_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
