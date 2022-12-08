const livrosController = require("../controllers/livrosController");
const express = require("express");
const router = express.Router();

router.get("/all", livrosController.getAllLivros);
router.post("/add", livrosController.adicionaLivro);
router.delete("/:id", livrosController.deletaLivro);
router.get("/nome", livrosController.localizaPeloNome);
router.get("/nota", livrosController.localizaPelaNota);
router.get("/autor", livrosController.localizaPeloAutor);
router.patch("/alterar/:id", livrosController.alteraCadastro);


module.exports = router;
