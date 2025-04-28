from quart import Blueprint, jsonify

main_blueprint = Blueprint('main', __name__)


# Ping route
@main_blueprint.route('/api/ping')
async def ping():
    return jsonify({"message": "pong"})
