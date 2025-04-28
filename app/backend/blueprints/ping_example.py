from quart import Blueprint, jsonify

ping_example_blueprint = Blueprint('ping_example', __name__)


# Ping route - you can use curl to test this: curl http://127.0.0.1:8000/api/ping
@ping_example_blueprint.route('/api/ping')
async def ping():
    return jsonify({"message": "pong"})
