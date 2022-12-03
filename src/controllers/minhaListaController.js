const minhaListaSchema = require("../model/filmes");

const getMinhaLista = async (req, res) => {
  try {
    const minhaLista = await minhaListaSchema.find();
    res.status(200).send(minhaLista);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const addMinhaLista = async (req, res) => {
  try {
    const adicionaMinhaLista = new minhaListaSchema(req.body);

    const salvarMinhaLista = await adicionaMinhaLista.save();

    return res.status(201).send({
      message: "Filme adicionado com sucesso",
      salvarMinhaLista,
    });
  } catch (error) {
    console.error(error);
  }
};

const deletaMinhaLista = async (req, res) => {
  try {
    const LocalizaMinhaLista = await minhaListaSchema.findById(req.params.id);

    await LocalizaMinhaLista.delete();

    return res.status(200).send({
      mensagem: `O cadastro '${LocalizaMinhaLista.id}' foi deletado com sucesso!`,
      LocalizaMinhaLista,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

module.exports = {
  getMinhaLista,
  addMinhaLista,
  deletaMinhaLista,
};
