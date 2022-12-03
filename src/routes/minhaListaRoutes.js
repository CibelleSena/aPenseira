const minhaListaController = require("../controllers/minhaListaController");
const express = require("express");
const router = express.Router();

router.get("/minhaLista", minhaListaController.getMinhaLista);
router.post("/minhaLista/add", minhaListaController.addMinhaLista);
router.delete("/minhaLista/:id", minhaListaController.deletaMinhaLista);

module.exports = router;
