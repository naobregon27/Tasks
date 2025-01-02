# Task-Manager
App Full-stack

## Descripción del Proyecto
Aplicación de gestión de tareas "Task Manager" que permita a los usuarios:
- Crear, leer, actualizar y eliminar tareas.
- Visualizar la lista de tareas en una interfaz intuitiva y moderna.
- Marcador tareas como completadas o pendientes.

### Backend

1. Recursos principales Tarea (Task):
    - ID único generado automáticamente.
    - Título (title) - Texto obligatorio.
    - Descripción (description) - Texto opcional.
    - Estado (completed) - Booleano, por defecto false.
    - Fecha de creación (createdAt) - Fecha generada automáticamente.

2. Endpoints requeridos:
    - POST /api/tasks:
        - Crea una nueva tarea.
        - Valida que el campo title esté presente.
    - GET /api/tasks:
        - Devuelve la lista de tareas.
        - Debe incluir la opción de filtrar por estado (completed o pending).
    - GET /api/tasks/:id:
        - Devuelve los detalles de una tarea específica.
    - PUT /api/tasks/:id:
        - Permite actualizar los campos de una tarea.
    - DELETE /api/tasks/:id:
        - Elimina una tarea.

3. Puntos adicionales para el backend:
    - Uso de MongoDB con Mongoose para la base de datos.
    - Implementa validaciones con express-validator.
    - Documenta los endpoints con Swagger.
    - Manejo de errores estructurado con respuestas claras (códigos 400, 404, 500).

### Frontend

1. Funcionalidades:
    - Pantalla principal con una lista de tareas.
        - Cada tarea debe mostrar: título, estado (completada o pendiente) y fecha de creación.
        - Botones para editar o eliminar una tarea.
    - Formulario para agregar una nueva tarea.
    - Función para marcar tareas como completadas o pendientes desde la lista.
    - Filtro para visualizar solo tareas completadas, pendientes o todas.
    - Diseño responsivo para desktop y móvil.

2. Puntos técnicos para el frontend:
    - Uso de React.js con Tailwind CSS.
    - Maneja el estado global con Redux.
    - Integracion de la API del backend para todas las operaciones.
    - Maneja los errores de la API y muestra mensajes claros al usuario.


## Pasos para Instalar y Ejecutar el Proyecto Localmente

### Backend
1. Clonar el repositorio:
    ```bash
    git clone <https://github.com/naobregon27/Tasks.git>
    ```

2. Instalar dependencias:
    ```bash
    npm install
    ```

3. Configurar las variables de entorno:
    - Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
        ```plaintext
        URL_MONGOOSE=<tu_mongodb_uri>
        ```

4. Iniciar el servidor:
    ```bash
    npm run dev
    ```

### Frontend
1. Clonar el repositorio:
    ```bash
    git clone <https://github.com/naobregon27/Tasks.git>
    ```

2. Instalar dependencias:
    ```bash
    npm install
    ```

3. Iniciar la aplicación:
    ```bash
    npm run dev
    ```
