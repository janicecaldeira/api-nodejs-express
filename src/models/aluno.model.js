const { Sequelize } = require("sequelize");
const database = require("../database/db");

const Aluno = database.define("aluno", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  idade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estudante: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

// Aluno.sync({ force: true })

module.exports = Aluno;
