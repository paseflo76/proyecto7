🎮 API de Juegos, Plataformas y Usuarios

Esta API REST permite gestionar **videojuegos**, las **plataformas de gaming** donde están disponibles (**PlayStation, Xbox, Nintendo Switch, PC**, etc.) y la **autenticación de usuarios** con **registro, login y protección con JWT**.

## 📌 Características principales

✅ Gestión de **videojuegos** con información detallada.  
✅ Administración de **plataformas de gaming** y sus juegos disponibles.  
✅ **Registro e inicio de sesión** con encriptación de contraseñas (**bcrypt**) y **JWT** para autenticación.  
✅ **Evita duplicados** en los juegos dentro de cada plataforma.  
✅ Uso de **MongoDB y Mongoose** como base de datos.  
✅ Servidor construido con **Node.js y Express.js**.  
✅ Rutas protegidas y manejo de errores.

---

## 🛠 **Tecnologías utilizadas**

El proyecto está desarrollado con las siguientes tecnologías:

- **Node.js** - Entorno de ejecución de JavaScript en el servidor.
- **Express.js** - Framework para construir la API de manera eficiente.
- **MongoDB** - Base de datos NoSQL para almacenar los juegos, plataformas y usuarios.
- **Mongoose** - ODM para modelar los datos en MongoDB.
- **bcrypt** - Para encriptar contraseñas de usuarios.
- **jsonwebtoken (JWT)** - Para autenticación y protección de rutas.
- **Dotenv** - Manejo de variables de entorno.

---

## 🚀 **Instalación y configuración**

### 1️⃣ Clonar el repositorio:

git clone https://github.com/paseflo76/proyecto7.git

2️⃣ Instalar dependencias:

npm install
3️⃣ Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto y agrega la configuración de la base de datos MongoDB y la clave secreta para JWT:

DB_URL=mongodb+srv://paseflo34:xFlyjEfHFot3AgI5@cluster0.3zwcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=kjviutkjasbciarnvporn

4️⃣ Iniciar el servidor:

npm start
o con Nodemon para desarrollo:

npm run dev
El servidor se ejecutará en:
➡️ http://localhost:3000

📡 Endpoints disponibles
🔹 Usuarios (Autenticación)
Método Endpoint Descripción
🔹GET /isAdmin/ Obtiene todos los user por el admin
🔹PUT /isAdmin/ modifica todos los user por el admin
🔹POST /register Registra un nuevo usuario
🔹POST /login Inicia sesión y devuelve un token JWT
🔹Delete /isAdmin/ Elimian todos los user por el admin

🔹 Juegos
Método Endpoint Descripción
🔹GET /games Obtener todos los juegos
🔹GET /games/:id Obtener un juego por ID
🔹POST /ISAUTH/games Crear un nuevo juego (Requiere autenticación JWT)
🔹PUT /isAdmin/games/:id Actualizar un juego existente (Requiere autenticación JWT)por el admin
🔹DELETE /isAdmin/games/:id Eliminar un juego (Requiere autenticación JWT)por el admin

🔹 Plataformas
Método Endpoint Descripción
🔹GET /plataformas Obtener todas las plataformas de gaming
🔹GET /plataformas/:id Obtener una plataforma por ID
🔹POST /isAdmin/plataformas Crear una nueva plataforma (Requiere autenticación JWT)por el admin
🔹PUT /isAdmin/plataformas/:id Actualizar una plataforma (evitando duplicados en juegos, Requiere autenticación JWT)por el admin
🔹DELETE /isAdmin/plataformas/:id Eliminar una plataforma (Requiere autenticación JWT)
🔑 Autenticación con JWTpor el admin
Después de iniciar sesión en /auth/login, recibirás un token JWT que deberás incluir en las peticiones protegidas.
