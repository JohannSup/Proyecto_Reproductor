const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port:3306,
    database: 'CrudCancion'
});

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error: ' + err)
    }
    else{
        console.log('La base de datos se ha conectado exitosamente')
    }
});

module.exports = conexion;