const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
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
  lido: {
    type: Boolean,
    required: true,
  },
  pages: Number,

  nota: Number,

  Comentarios: {
    type: String,
    required: false,
  },
});

const Model = mongoose.model("Livros", livroSchema);

module.exports = Model;
