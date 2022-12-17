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
      mensagem: `O livro '${encontraLivro.nome}' foi deletado com sucesso!`,
      encontraLivro,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

const localizaPeloNome = async (req, res) => {
  try {
    const localizaNome = await livroSchema.findOne({ nome: req.query.nome });
    if (!localizaNome) {
      return res.status(400).json({
        mensagem: `O livro '${req.query.nome}' não foi localizado, por favor confira e tente novamente.`,
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
    const { nome, autor, categoria, comentarios, nota } = req.body;
    const alterarCadastro = await livroSchema.findById(id);
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
  getAllLivros,
  adicionaLivro,
  deletaLivro,
  localizaPeloNome,
  alteraCadastro,
};
