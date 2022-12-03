const livrosController = require("../controllers/livrosController");
const express = require("express");
const router = express.Router();

router.get("/livros", livrosController.getAllLivros);
router.post("/addLivros", livrosController.adicionaLivro);
router.delete("/livros/:id", livrosController.deletaLivro);

module.exports = router;
