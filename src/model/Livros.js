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
  categoria: {
    type: String,
    required: false,
  },
   Comentarios: {
    type: String,
    required: false,
  },
  nota: Number,
});

const Model = mongoose.model("Livros", livroSchema);

module.exports = Model;
