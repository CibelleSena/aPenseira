const filmesController = require("../controllers/filmesController");
const express = require("express");
const router = express.Router();

router.get("/filmes", filmesController.getAllFilmes);
router.post("/addFilmes", filmesController.adicionaFilme);
router.delete("/filmes/:id", filmesController.deletaFilme);

module.exports = router;
