# Chatbot Tienda Alemana Frontend

Este proyecto contiene una interfaz web sencilla construida con React y Vite para interactuar con el backend de Tienda Alemana.

## Uso

1. Instalar dependencias (requiere Node.js):
   ```bash
   npm install
   ```
2. Crear un archivo `.env` en la raíz indicando la URL del backend:
   ```
   VITE_BACKEND_URL=http://localhost:8000
   ```
3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir `http://localhost:5173` en el navegador.

Al iniciar la aplicación se muestra una caja de chat donde pueden escribirse preguntas que serán enviadas al backend `/ask`.
