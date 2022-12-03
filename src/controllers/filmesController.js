const filmeSchema = require("../model/filmes");

const getAllFilmes = async (req, res) => {
  try {
    const listaTodosFilmes = await filmeSchema.find();
    res.status(200).send(listaTodosFilmes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const adicionaFilme = async (req, res) => {
  try {
    const novoFilme = new filmeSchema(req.body);

    const salvarFilme = await novoFilme.save();

    return res.status(201).send({
      message: "Filme adicionado com sucesso",
      salvarFilme,
    });
  } catch (error) {
    console.error(error);
  }
};

const deletaFilme = async (req, res) => {
  try {
    const encontrafilme = await filmeSchema.findById(req.params.id);

    await encontrafilme.delete();

    return res.status(200).send({
      mensagem: `O filme '${encontrafilme.id}' foi deletado com sucesso!`,
      encontrafilme,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

module.exports = {
  getAllFilmes,
  adicionaFilme,
  deletaFilme,
};
