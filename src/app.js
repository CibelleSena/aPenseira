const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger/swagger_output.json");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbconnect");
const index = require("./routes/index");
const filmes = require("./routes/filmesRoutes");
const livros = require("./routes/livrosRoutes");
const usuarios = require("./routes/usuariosRoutes");
const minhaLista = require("./routes/minhaListaRoutes");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/", index);
app.use("/filmes", filmes);
app.use("/livros", livros);
app.use("/usuarios", usuarios);
app.use("/minhaLista", minhaLista);
app.use(
  "/minha-rota-de-documentacao",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile)
);

module.exports = app;
