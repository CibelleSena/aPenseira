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
  categoria: {
    type: String,
    required: false,
  },
  comentarios: {
    type: String,
    required: false,
  },
  nota: Number,
});

const Model = mongoose.model("Filmes", filmeSchema);

module.exports = Model;
