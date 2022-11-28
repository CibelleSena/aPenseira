const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema(
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
    Assistido: {
        type: Date,
        required: true,
      }, 
    Comentarios: {
        type: String,
        required: false
    }
  },
);

const Model = mongoose.model("Filmes", filmeSchema);

module.exports = Model;

