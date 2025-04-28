from quart import Blueprint, jsonify

main_blueprint = Blueprint('main', __name__)

@main_blueprint.route('/api/ping')
async def ping():
    return jsonify({"message": "pong"})
