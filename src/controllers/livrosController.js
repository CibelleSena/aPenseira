const livroSchema = require("../model/Livros");

const getAllLivros = async (req, res) => {
  try {
    const listaTodosLivros = await livroSchema.find();
    res.status(200).send(listaTodosLivros);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const adicionaLivro = async (req, res) => {
  try {
    const novoLivro = new livroSchema(req.body);

    const salvarLivro = await novoLivro.save();

    return res.status(201).send({
      message: "Livro adicionado com sucesso",
      salvarLivro,
    });
  } catch (error) {
    console.error(error);
  }
};

const deletaLivro = async (req, res) => {
  try {
    const encontraLivro = await livroSchema.findById(req.params.id);

    await encontraLivro.delete();

    return res.status(200).send({
      mensagem: `O livro '${encontraLivro.id}' foi deletado com sucesso!`,
      encontraLivro,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

module.exports = {
  getAllLivros,
  adicionaLivro,
  deletaLivro,
};
