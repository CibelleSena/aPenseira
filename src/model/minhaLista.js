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
  Autor: {
    type: String,
    required: false,
  },
  anoLancamento: {
    type: Number,
    required: false,
  },
  categoria: {
    type: String,
    required: false,
  },
  Assistido: {
    type: Date,
    required: false,
  },
  Comentarios: {
    type: String,
    required: false,
  },
});

const Model = mongoose.model("Minha Lista", minhaListaSchema);

module.exports = Model;
