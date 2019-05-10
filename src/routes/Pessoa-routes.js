const express = require('express');

const router = express.Router();
const Controller = require('./../controllers/Pessoa-controller');
const Validation = require('./../validations/Pessoa-Validation');

router.get('/consultarid', Validation.getById, Controller.getById);
router.get('/consultar', Controller.getAll);
router.post('/inserir', Validation.post, Controller.post);
router.put('/editar', Validation.put, Controller.put);
router.delete('/deletar', Validation.delete, Controller.delete);

module.exports = router;