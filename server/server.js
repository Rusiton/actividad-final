const EXPRESS = require('express');
const MYSQL = require('mysql2');
const API = EXPRESS();
const PORT = 5174;

const checkApiKey = require('./middleware/checkApiKey.js');

require('dotenv').config();

const DB = MYSQL.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

DB.connect((error) =>{
    if(error){
        console.error('Error al conectar:', error);
        return;
    }

    console.log('CONEXIÓN A LA BASE DE DATOS EXITOSA');
});

API.use(EXPRESS.json(), (req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();

});



/* END-POINTS */

API.get('/get-all-tasks', checkApiKey, (request, response) => {

    // const {param} = request.params;
    
    DB.query('SELECT * FROM actFinal__tasks', (error, query_response) => {
        if(error){
            response.status(400).json({message: error.message});
            return;
        }

        response.json(query_response);
    });

});



API.get('/get-task/:id_task', checkApiKey, (request, response) => {

    const {id_task} = request.params;
    
    DB.query('SELECT * FROM actFinal__tasks WHERE id_task = ?', [id_task], (error, query_response) => {
        if(error){
            response.status(400).json({message: error.message});
            return;
        }

        response.json(query_response[0]);
    });

});



API.post('/post-task', checkApiKey, (request, response) => {

    const {title} = request.body;
    const {description} = request.body;

    console.log(request.body)

    if(!title || !description){
        response.status(400).json({message: "Missing arguments"});
        return;
    }

    DB.query('INSERT INTO actFinal__tasks (title, description) VALUES (?, ?)', [title, description], (error, query_response) => {
        if(error){
            response.status(400).json({message: error.message});
            return;
        }

        response.json(query_response);
    });

});



API.put('/update-task/:id_task', checkApiKey, (request, response) => {

    const {title} = request.body;
    const {description} = request.body;
    const {id_task} = request.params;

    if(!id_task || !title || !description){
        response.status(400).json({message: "Missing arguments"});
        return;
    }

    DB.query('UPDATE actFinal__tasks SET title = ?, description = ? WHERE id_task = ?', [title, description, id_task], (error, query_response) => {
        if(error){
            response.status(400).json({message: error.message});
            return;
        }

        response.json(query_response);
    });

});



API.delete('/delete-task/:id_task', checkApiKey, (request, response) => {

    const {id_task} = request.params;

    DB.query('DELETE FROM actFinal__tasks WHERE id_task = ?', [id_task], (error, query_response) => {
        if(error){
            response.status(400).json({message: error.message});
            return;
        }

        response.json(query_response);
    });

});



API.listen(PORT, () => {
    console.log("SERVIDOR ESCUCHANDO AL PUERTO", PORT);
});