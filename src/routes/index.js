const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Projeto Final Cibelle Sena - Reprograma On19 - A Penseira ",
    version: "1.0.0",
  });
});

module.exports = router;
