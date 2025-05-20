# Importar las dependencias necesarias
# Import necessary dependencies
from quart import Blueprint, jsonify

# Crear un Blueprint para manejar las rutas relacionadas con el nombre
# Create a Blueprint to handle name-related routes
name_bp = Blueprint("name", __name__)

# Variable que almacena el nombre que se mostrará en el frontend
# Variable that stores the name to be displayed in the frontend
# Puedes modificar este valor para cambiar el nombre que se muestra
# Hint:You can modify this value to change the name that's returned to the frontend
CURRENT_NAME = "Jose Velis"


# Endpoint que devuelve el nombre al frontend
# Endpoint that returns the name to the frontend
# Este decorador (@name_bp.route) define la ruta '/api/name'
# This decorator (@name_bp.route) defines the '/api/name' route
@name_bp.route("/api/name", methods=["GET"])
async def get_name():
    # Devolver el nombre en formato JSON
    # Return the name in JSON format
    return jsonify({"name": CURRENT_NAME})
