# Guía para ejecutar el proyecto

Para poder ejecutar el proyecto 'actividad-final' correctamente, primero se deben seguir los siguientes pasos.

1. Clonar el repositorio en tu computadora y entrar

## Client Side

1. Entrar a la carpeta **client**.
2. Abrir CMD en dicha carpeta o usar la terminal de algún editor de código.
3. Ejecutar el comando ***npm install***
4. Ejecutar el comando ***npm run dev***

*Nota: La carpeta client será ejecutada en el puerto 5173*

## Server Side

1. Entrar a la carpeta **server**.
2. Abrir CMD en dicha carpeta o usar la terminal de algún editor de código.
3. Ejecutar los siguientes comandos: ***npm install express*** / ***npm install --save-dev nodemon*** / ***npm install dotenv*** / ***npm install mysql2***
4. Crear el archivo **.env** con las siguientes variables de entorno y sus respectivas credenciales: ***DB_HOST*** / ***DB_USER*** / ***DB_PASSWORD*** / ***DB_NAME*** / ***API_KEY***
5. Ejecutar ***npm run dev***

*Nota: La carpeta server será ejecutada en el puerto 5174*
