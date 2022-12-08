const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    nome: { type: String },
    CPF: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    versionKey: false,
  }
);

const Model = mongoose.model("Usuarios", usuarioSchema);

module.exports = Model;
