const Aluno = require("../models/aluno.model");

exports.findAll = async function findAll(req, res) {
  Aluno.findAll().then((result) => res.json(result));
};

exports.create = function create(req, res) {
  Aluno.create({
    nome: req.body.nome,
    email: req.body.email,
    idade: req.body.idade,
    genero: req.body.genero,
    telefone: req.body.telefone,
    estudante: req.body.estudante,
  })
    .then(() => res.send("Aluno inserido com sucesso!"))
    .catch(function (error) {
      res.send(`Erro: ${error.message}`);
    });
};
