const geralSchema = require("../model/minhaLista");

const getAll = async (req, res) => {
  try {
    const listaTodos = await geralSchema.find();
    res.status(200).send(listaTodos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const localizaPeloNome = async (req, res) => {
  try {
    const encontraNome = await geralSchema.find({ nome: req.query.nome });
    if (!encontraNome) {
      res
        .status(404)
        .json({
          message:
            "Este nome não foi localizado, por favor confira e tente novamente",
        });
    }
    res.status(200).json(localizaPeloNome);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const localizaPelaNota = async (req, res) => {
  try {
    const localizaNota = await geralSchema.find({ nota: req.query.nota });
    if (!localizaNota) {
      res
        .status(404)
        .json({ message: "Nada encontrado para a nota escolhida" });
    }
    res.status(200).json(localizaPelaNota);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const localizaPeloAutor = async (req, res) => {
  try {
    const localizaAutor = await geralSchema.find({ autor: req.query.autor });
    if (!localizaAutor) {
      res
        .status(404)
        .json({ message: "Nada encontrado para a nota escolhida" });
    }
    res.status(200).json(localizaPeloAutor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const alteraCadastro = async (req, res) => {
  try {
    const { id } = req.params.body;

    const alterarCadastro = await geralSchema.findById(id);
    if (alterarCadastro == null) {
      res.status(404).json({ message: "Cadastro não localizado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const minhaLista = async (req, res) => {
  try {
    const minhaLista = await geralSchema.find({
      minhaLista: req.query.minhaLista,
    });
    if (!minhaLista) {
      res
        .status(404)
        .json({ message: "Nada encontrado para a lista selecionada" });
    }
    res.status(200).json(minhaLista);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adicionaMinhaLista = async (req, res) => {
  try {
    const novaLista = new geralSchema(req.body);

    const salvarMinhaLista = await novaLista.save();

    return res.status(201).send({
      message: "User criado com sucesso",
      salvarMinhaLista,
    });
  } catch (e) {
    console.error(e);
  }
};

const deletaMinhaLista = async (req, res) => {
  try {
    const encontraLista = await geralSchema.findById(req.params.id);

    await encontraLista.delete();

    return res.status(200).send({
      mensagem: `Cadastro '${encontraLista.id}' deletado com sucesso!`,
      encontraLista,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

module.exports = {
  getAll,
  localizaPeloNome,
  localizaPelaNota,
  localizaPeloAutor,
  alteraCadastro,
  minhaLista,
  adicionaMinhaLista,
  deletaMinhaLista,
};
