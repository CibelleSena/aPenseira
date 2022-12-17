const express = require("express");
const router = express.Router();

router.get("/apenseira", function (req, res) {
  res.status(200).send({
    title: " A Penseira de Cibelle Sena - Reprograma on19 ",
  });
});

module.exports = router;
