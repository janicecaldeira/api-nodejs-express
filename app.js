const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/aluno.routes");
const db = require("./src/database/db");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/api", routes);
app.use(express.static("public"));

db.sync();

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
