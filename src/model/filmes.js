const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
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
    required: true,
  },
  anoLancamento: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: false,
  },
  recomenda: {
    type: Boolean,
    required: true,
  },
  assistido: {
    type: String,
    required: true,
  },
  comentarios: {
    type: String,
    required: false,
  },
  nota: Number,
});

const Model = mongoose.model("Filmes", filmeSchema);

module.exports = Model;
