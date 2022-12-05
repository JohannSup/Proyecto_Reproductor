const { query } = require('../../../utils/mysql');

const findAll = async () => {
  const sql = 'select * from cancion';
  return await query(sql, []);
};

const findById = async (id) => {
  if (Number.isNaN(id)) throw Error('Wrong type');
  if (!id) throw Error('Missing fields');
  const sql = `select * from cancion where id_cancion =?`;
  return await query(sql, [id]);
};

const save = async (cancion) => {
  if (
    !cancion.nombre_cancion ||
    !cancion.genero ||
    !cancion.artista ||
    !cancion.caratula ||
    !cancion.id_cancion.id
  )
    throw Error('Missing fields');
  const sql = `INSERT INTO cancion (nombre_cancion,genero,artista,caratula,
    id_cancion) VALUES (?,?,?,?,?)`;
  const { insertedId } = await query(sql, [
    cancion.nombre_cancion,
    cancion.genero,
    cancion.artista || null,
    cancion.caratula,
    cancion.id_cancion.id
  ]);
  return { ...cancion, id: insertedId };
};

module.exports = {
  findAll,
  findById,
  save,
};