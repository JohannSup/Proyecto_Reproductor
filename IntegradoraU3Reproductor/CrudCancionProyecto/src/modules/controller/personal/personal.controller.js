const { Response, Router } = require('express');
const validateError = require('../../../utils/functions');
const { findAll, findById, save } = require('./personal.gateway');

const getAll = async (req, res = Response) => {
  try {
    const personal = await findAll();
    res.status(200).json(personal);
  } catch (error) {
    console.log(error);
    const message = validateError(error);
    res.status(400).json({ message }); //{message:""}
  }
};

const getById = async (req, res = Response) => {
  try {
    const { id } = req.params;
    const cancion = await findById(id);
    res.status(200).json(cancion);
  } catch (error) {
    console.log(error);
    const message = validateError(error);
    res.status(400).json({ message });
  }
};

const insert = async (req, res = Response) => {
  try {
    const { nombre_cancion, genero, artista, caratula, id_cancion } = req.body;
    const cancion = await save({
      nombre_cancion,
      genero,
      artista,
      caratula,
      id_cancion
    });
    res.status(200).json(cancion);
  } catch (error) {
    console.log(error);
    const message = validateError(error);
    res.status(400).json({ message });
  }
};

const personalRouter = Router();

personalRouter.get(`/`, [], getAll);
personalRouter.get(`/:id`, [], getById);
personalRouter.post(`/`, [], insert);

module.exports = {
  personalRouter,
};