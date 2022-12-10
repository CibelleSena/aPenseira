const usuariosController = require("../controllers/usuariosController");
const express = require("express");
const router = express.Router();

router.get("/all", usuariosController.getAllUsuarios);
router.post("/add", usuariosController.adicionaUsuario);
router.post("/login", usuariosController.login);
router.delete("/:id", usuariosController.deletaUsuario);
router.patch("/alterar/:id", usuariosController.alteraCadastro);

module.exports = router;

