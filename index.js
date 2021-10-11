const { application } = require('express');
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');


//Crear el servidor

const app = express();

//Conectar DB
conectarDB();

//Habilitar Cors
app.use(cors());

//Habilitar express.json
app.use(express.json({extended:true}));

//Puerto de la app
const PORT = process.env.PORT || 4000;

//Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//Definir página principal
app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})

//Arrancar app
app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
})