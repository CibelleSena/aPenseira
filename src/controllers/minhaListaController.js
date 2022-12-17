const minhaListaSchema = require("../model/minhaLista");

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
      message: "Adicionado com sucesso em Minha Lista",
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
      mensagem: `O cadastro '${LocalizaMinhaLista.nome}' foi deletado com sucesso!`,
      LocalizaMinhaLista,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};
const localizaPeloNome = async (req, res) => {
  try {
    const localizaNome = await minhaListaSchema.findOne({
      nome: req.query.nome,
    });
    if (!localizaNome) {
      return res.status(400).json({
        mensagem: `'${req.query.nome}' não foi localizado, por favor confira e tente novamente.`,
      });
    }
    res.status(200).json(localizaNome);
  } catch (error) {
    console.log(error);
    res.status(500).json({ messagem: error.message });
  }
};

const alteraCadastro = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, autor, categoria, comentarios } = req.body;
    const alterarCadastro = await minhaListaSchema.findById(id);
    if (alterarCadastro == null) {
      res.status(404).json({ message: "Cadastro não localizado" });
    }
    alterarCadastro.nome = nome || alterarCadastro.nome;
    alterarCadastro.autor = autor || alterarCadastro.autor;
    alterarCadastro.categoria = categoria || alterarCadastro.categoria;
    alterarCadastro.comentarios = comentarios || alterarCadastro.comentarios;

    const salvaAlteração = await alterarCadastro.save();
    res
      .status(200)
      .json({ message: "Cadastro alterado com sucesso!", salvaAlteração });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMinhaLista,
  addMinhaLista,
  deletaMinhaLista,
  localizaPeloNome,
  alteraCadastro,
};
