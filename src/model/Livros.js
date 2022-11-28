const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema(
  {
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
    Recomenda: {
        type: Boolean,
        required: true,
      },
    Lido: {
        type: Boolean,
        required: true,
      }, 
    pages: Number,

    Comentarios: {
        type: String,
        required: false
    }
  },
);

const Model = mongoose.model("Livros", livroSchema);

module.exports = Model;

