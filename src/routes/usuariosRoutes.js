const usuariosController = require("../controllers/usuariosController");
const express = require("express");
const router = express.Router();

router.get("/usuarios", usuariosController.getAllUsuarios);
router.post("/addUsuario", usuariosController.adicionaUsuario);
router.post("/login", usuariosController.login);
router.delete("/usuario/:id", usuariosController.deletaUsuario);

module.exports = router;
