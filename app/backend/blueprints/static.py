from quart import Blueprint, send_from_directory, current_app
import os

static_blueprint = Blueprint('static', __name__)


@static_blueprint.route('/<path:filename>')
async def static_files(filename):
    static_folder = os.path.join(current_app.root_path, 'static')
    return await send_from_directory(static_folder, filename)

@static_blueprint.route('/')
async def root():
    static_folder = os.path.join(current_app.root_path, 'static')
    return await send_from_directory(static_folder, 'index.html')
