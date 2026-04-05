TaskFlow Frontend

Interfaz de usuario para una aplicación fullstack de gestión de tareas.

Permite gestionar tareas de forma visual, conectándose a una API REST.

Tecnologías

React
Vite
React Router DOM
Context API
Fetch API
CSS

Funcionalidades

Crear tareas
Ver detalle de tareas
Editar tareas
Marcar tareas como completadas
Eliminar tareas
Buscar tareas por título
Filtrar por estado
Modo oscuro y claro
Diseño responsive

Instalación

npm install

Configuración

Crea un archivo .env basado en .env.example:

VITE_API_URL=http://localhost:3000/api

Ejecución

npm run dev

Aplicación disponible en:

http://localhost:5173

Estructura del proyecto

front/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json

Conexión con el backend

El frontend consume una API REST definida mediante:

VITE_API_URL

Ejemplo en producción:

https://tu-backend.onrender.com/api

Despliegue

Preparado para desplegarse en:

Netlify
Vercel
Autor

Marc