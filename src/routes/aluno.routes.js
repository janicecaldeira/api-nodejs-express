const express = require("express")
const routes = express.Router();

const alunoController = require('../controllers/aluno.controller')

routes.get('/aluno', alunoController.findAll);
routes.post('/aluno', alunoController.create);
// routes.get('/aluno/:id', alunoController.findOne);
// routes.put('/aluno/:id', alunoController.update);
// routes.delete('/aluno/:id', alunoController.delete);

module.exports = routes
