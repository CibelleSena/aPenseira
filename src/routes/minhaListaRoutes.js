const minhaListaController = require("../controllers/minhaListaController");
const express = require("express");
const router = express.Router();

router.get("/all", minhaListaController.getMinhaLista);
router.post("/add", minhaListaController.addMinhaLista);
router.delete("/:id", minhaListaController.deletaMinhaLista);
router.get("/nome", minhaListaController.localizaPeloNome);
router.patch("/alterar/:id", minhaListaController.alteraCadastro);

module.exports = router;
