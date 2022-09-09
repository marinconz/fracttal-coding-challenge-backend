# Fracttal Coding Challenge
## Bienvenidos a mi implementación! :smile:
Hola! Esta es una guía de cómo correr este proyecto y unos cuantos detalles que son importantes para poder entender la imlpementación.
Esta es la prueba técnica para Fracttal, y está basada en las instrucciones que me fueron brindadas en el pdf.
Par esta implementación, el backend se realizó en Express con MongoDB, y todo se separó en una estructura por carpetas.

## Precondiciones
Este proyecto requiere la versión de node `v14.18.2`

## Cómo correr el proyecto :runner:
Para poder correr el backend y que todo funcione desde localhost:5000 se requieren los siguientes pasos: 
1. Clonar o descargar el repositorio
2. Hacer `cd` al directorio /server
3. Correr el comando `npm install` en la terminal para instalar todas las dependencias necesarias
4. Correr `npm start`, esto subirá el backend y ya se podrá tener acceso a la base de datos

## Detalles importantes
Las herramientas que fueron utilizadas para este proyecto fueron:
- `Express` y `MongoDB` para la base del backend y la persistencia y operaciones sobre la base de datos
- `JWT`, `crypto-js` y `bcrypt` para toda la parte de autenticación (hashing: SHA256, comparación de contraseñas y creación y validación de token para la sesión)
- `Winston` y `winston-mongodb` para crear los logs y guardarlos en un schema de la base de datos, para luego consumirlos desde la aplicación web
-  El archivo `.env` debería estar en el .gitignore, sin embargo, teniendo en cuenta que esta aplicación no está desplegada y es solo para propósitos técnicos, decidí dejarlo público ya que necesitan la URL de conexión a MongoDB y esta contiene credenciales fundamentales. 