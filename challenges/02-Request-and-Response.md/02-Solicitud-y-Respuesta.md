# Desafío 2: Comprendiendo la Comunicación Frontend-Backend

## Introducción

¡Bienvenido al Desafío 2! En este desafío, aprenderás cómo funcionan juntos el frontend y el backend de nuestra aplicación Quart. Este es un concepto fundamental en desarrollo web que utilizarás en cada aplicación web que construyas.

## Lo que aprenderás

- Cómo se estructuran las aplicaciones web con componentes frontend y backend
- El concepto de solicitudes y respuestas HTTP
- Cómo hacer solicitudes desde el frontend al backend
- Cómo el backecrend procesa las solicitudes y envía respuestas

## Estructura de la Aplicación

### Backend (Python)

Nuestra aplicación Quart tiene un backend en Python ubicado en el directorio `app/backend`. El backend es responsable de:

- Manejar las solicitudes entrantes del frontend
- Procesar datos (en aplicaciones reales, esto a menudo involucra bases de datos)
- Enviar respuestas al frontend

### Frontend (React)

Nuestro frontend está construido con React y TypeScript, ubicado en el directorio `app/frontend`. El frontend es responsable de:

- Mostrar la interfaz de usuario
- Hacer solicitudes al backend
- Mostrar los datos recibidos del backend

## ¿Qué es una Solicitud y una Respuesta?

### Solicitud (Request)

Una solicitud es cuando tu navegador (o frontend) le pide algo al servidor (backend). Piensa en ello como hacer una pregunta:

1. El frontend envía una solicitud al backend
2. La solicitud incluye:
   - La URL (dónde enviar la solicitud)
   - El método HTTP (GET, POST, etc.)
   - Cualquier dato que se esté enviando

### Respuesta (Response)

Una respuesta es cuando el servidor contesta. Piensa en ello como recibir una respuesta a tu pregunta:

1. El backend procesa la solicitud
2. El backend envía una respuesta
3. La respuesta incluye:
   - Los datos solicitados
   - Un código de estado (como 200 para éxito)

## El Desafío del Nombre

### Lo que harás

1. Comienza mirando el código en `app/backend/blueprints/name.py`
2. Encuentra la variable `CURRENT_NAME`
3. Cambia el nombre por el tuyo propio
4. Navega a `/name` en tu navegador
5. Haz clic en el botón "Obtener Nombre" para ver aparecer tu nombre

### Cómo funciona

1. Cuando haces clic en "Obtener Nombre":
   - El frontend hace una solicitud GET a `/api/name`
   - Esta solicitud va a nuestro backend Quart
2. El backend:
   - Recibe la solicitud
   - Obtiene el nombre de `CURRENT_NAME`
   - Envía una respuesta con el nombre
3. El frontend:
   - Recibe la respuesta
   - Muestra tu nombre en la página

## Pruébalo tú mismo

1. Cambia el nombre en el backend
2. Observa cómo se actualiza en el frontend
3. Intenta actualizar la página
4. Haz clic en el botón varias veces

## Lo que has aprendido

Al completar este desafío, has aprendido:

- Cómo hacer solicitudes HTTP desde el frontend
- Cómo manejar respuestas en React
- Cómo crear endpoints en Quart
- El flujo de datos entre frontend y backend

¡Excelente trabajo! Has dado tu primer paso para comprender cómo se comunican las aplicaciones web entre el frontend y el backend.
