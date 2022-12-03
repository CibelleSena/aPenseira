const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger/swagger_output.json");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/dbConnect");
const index = require("./routes/index");
const filmes = require("./routes/filmesRoutes");
const livros = require("./routes/livrosRoutes");
const geral = require("./routes/geralRoutes");
const usuarios = require("./routes/usuariosRoutes");
const minhaLista = require("./routes/minhaListaRoutes");

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", index);
app.use("aPenseira/filmes", filmes);
app.use("aPenseira/livros", livros);
app.use("aPenseira/geral", geral);
app.use("aPenseira/usuarios", usuarios);
app.use("aPenseira/minhaLista", minhaLista);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
