### **Mini proyecto: "Gestor de Tareas Básico"**

**Objetivo:** Crear una mini app que permita gestionar tareas (CRUD: Crear, Leer, Actualizar y Eliminar).

#### **Requerimientos funcionales:**

1. Crear una ruta para mostrar todas las tareas disponibles (página principal).
2. Crear una ruta para agregar una nueva tarea.
3. Crear una ruta para editar una tarea existente.
4. Crear una ruta para eliminar una tarea.
5. Validar que los datos enviados por el usuario no estén vacíos.

#### **Requerimientos técnicos:**

1. Define un array en memoria que contenga las tareas. Cada tarea debe tener:

   - ID único (puede ser un número o un string).
   - Nombre de la tarea.
   - Estado (pendiente o completada).

2. Usa **middlewares** para:

   - Analizar datos enviados en formato JSON o URL-encoded.
   - Manejar errores para rutas inexistentes.

3. Implementa rutas:

   - **GET /tasks:** Devuelve todas las tareas.
   - **POST /tasks:** Recibe los datos de una nueva tarea y la agrega al array.
   - **PUT /tasks/:id:** Actualiza una tarea existente (nombre o estado).
   - **DELETE /tasks/:id:** Elimina una tarea por su ID.

4. Devuelve respuestas en formato JSON que incluyan:

   - Un mensaje de éxito o error.
   - Los datos actualizados después de cada operación.

5. Agrega una ruta para manejar errores 404 si el usuario intenta acceder a una ruta no definida.

---

#### **Ampliaciones opcionales:**

- Agrega un sistema básico de autenticación con un middleware que valide una "clave de acceso" en los headers antes de permitir las operaciones.
- Implementa paginación para la ruta **GET /tasks**.
- Integra validaciones más avanzadas, como verificar que el ID de la tarea sea único al crear una nueva.

---
