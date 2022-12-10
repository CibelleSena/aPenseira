const filmesController = require("../controllers/filmesController");
const express = require("express");

const router = express.Router();

router.get("/all", filmesController.getAllFilmes);
router.post("/add", filmesController.adicionaFilme);
router.delete("/:id", filmesController.deletaFilme);
router.get("/nome", filmesController.localizaPeloNome);
router.patch("/alterar/:id", filmesController.alteraCadastro);




module.exports = router;
