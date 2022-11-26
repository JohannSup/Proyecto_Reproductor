const rutas = require('express').Router()
const conexion = require('./config/conexion')


//get canciones
rutas.get('/', (req, res)=>{
    let sql = 'select * from cancion'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
//get una cancion
rutas.get('/:id', (req, res)=>{
    const {id} =req.params
    let sql = 'select * from cancion where id_cancion =?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar canción
rutas.post('/'),(req, res)=>{
    const{nombre_cancion, genero, artista, caratula}=req.body
    let sql = `insert into cancion(nombre_cancion, genero, artista, caratula) 
    values('${nombre_cancion}','${genero}','${artista}','${caratula}')`
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Canción agregada'})
        }
    })
}

//eliminar canción
rutas.delete('/:id',(req, res)=>{
const{id}=req.params
let sql = `delete from cancion where id_cancion = '${id}`
conexion.query(sql,(err, rows, fields)=>{
    if(err) throw err
    else{
        res.json({status: 'Canción eliminada'})
    }
})
});

//modificar canción
rutas.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre_cancion, genero, artista, caratula} = req.body
    let sql = `update cancion set 
    nombre_cancion = '${nombre_cancion}',
    '${genero}',
    '${artista}',
    '${caratula}'
    where id_cancion = '${id}'`
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Canción actualizada'})
        }
    })
})

//---------------------------------------

module.exports = rutas;
//cambiar router por rutas