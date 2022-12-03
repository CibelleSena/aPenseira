const geralController = require("../controllers/geralController");
const express = require("express");
const router = express.Router();

router.get("/all", geralController.getAll);
router.get("/nome", geralController.localizaPeloNome);
router.get("/nota", geralController.localizaPelaNota);
router.get("/autor", geralController.localizaPeloAutor);
router.patch("/alterar/:id", geralController.alteraCadastro);
router.get("/minhaLista", geralController.minhaLista);
router.post("/minhaLista/add", geralController.adicionaMinhaLista);
router.delete("/minhaLista/:id", geralController.deletaMinhaLista);

module.exports = router;
