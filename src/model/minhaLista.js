const mongoose = require("mongoose");

const minhaListaSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  autor: {
    type: String,
    required: false,
  },
  categoria: {
    type: String,
    required: false,
  },
  comentarios: {
    type: String,
    required: false,
  },
});

const Model = mongoose.model("Minha Lista", minhaListaSchema);

module.exports = Model;
