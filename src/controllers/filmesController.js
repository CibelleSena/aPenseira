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

    return res.status(200).send({
      message: "Filme adicionado com sucesso",
      salvarFilme,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deletaFilme = async (req, res) => {
  try {
    const encontrafilme = await filmeSchema.findById(req.params.id);

    await encontrafilme.delete();

    return res.status(200).send({
      mensagem: `O filme '${encontrafilme.nome}' foi deletado com sucesso!`,
      encontrafilme,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

const localizaPeloNome = async (req, res) => {
  try {
    const { nome } = req.body
    console.log(nome)
    const localizaNome = await filmeSchema.find({ nome });

    return res.status(200).send({ 
      mensagem: `O filme ('${localizaNome}') foi o escolhido`,
    });
  } catch (err) {
    return res.status(400).send({
      messagem:
        "Este filme não foi localizado, por favor confira e tente novamente",
    });
  }
};

const localizaPelaNota = async (req, res) => {
  try {
    const localizaNota = await filmeSchema.find({ nota: req.query.nota });
    return res.status(200).send({ 
      mensagem: `Os filmes '${localizaNota.nota}' foram os escolhidos pela nota`,
    });
  } catch (err) {
    return res.status(400).send({
      messagem:
        "Este filme não foi localizado, por favor confira e tente novamente",
    });
  }
};
const localizaPeloAutor = async (req, res) => {
  try {
    const localizaAutor = await filmeSchema.find({ autor: req.query.autor });
    return res.status(200).send({ 
      mensagem: `Os filmes '${localizaAutor.autor}' foram os escolhidos pelo Autor`,
    });
  } catch (err) {
    return res.status(400).send({
      messagem:
        "Este filme não foi localizado, por favor confira e tente novamente",
    });
  }
};

const alteraCadastro = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, autor, categoria, comentarios, nota } = req.body;
    const alterarCadastro = await filmeSchema.findById(id);
    if (alterarCadastro == null) {
      res.status(404).json({ message: "Cadastro não localizado" });
    }
    alterarCadastro.nome = nome || alterarCadastro.nome;
    alterarCadastro.autor = autor || alterarCadastro.autor;
    alterarCadastro.categoria = categoria || alterarCadastro.categoria;
    alterarCadastro.comentarios = comentarios || alterarCadastro.comentarios;
    alterarCadastro.nota = nota || alterarCadastro.nota;

    const salvaAlteração = await alterarCadastro.save();
    res
      .status(200)
      .json({ message: "Cadastro alterado com sucesso!", salvaAlteração });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFilmes,
  adicionaFilme,
  deletaFilme,
  localizaPeloNome,
  localizaPelaNota,
  localizaPeloAutor,
  alteraCadastro,
};
