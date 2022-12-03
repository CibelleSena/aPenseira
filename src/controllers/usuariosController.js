const usuarioSchema = require("../model/usuarios");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAllUsuarios = async (req, res) => {
  const authHeader = req.get(`authorization`);
  const token = authHeader?.split(" ")[1] ?? "não Autorizado";

  if (!token) {
    return res.status(401);
  }
  const err = jwt.verify(token, SECRET, function (error) {
    if (error) return error;
  });
  console.log(req.url);
  colaboradoras.find(function (err, colaboradoras) {
    res.status(200).send(colaboradoras);
  });
};

const adicionaUsuario = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = senhaComHash;

  const novoUsuario = new usuarioSchema(req.body);

  novoUsuario.save(function (err) {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return res.status(201).send(colaboradora.toJSON());
  });
};

const login = (req, res) => {
  usuarioSchema.findOne({ email: req.body.email }, function (error, usuario) {
    if (!usuario) {
      return res.status(404).send(`Não localizamos o email ${req.body.email}`);
    }

    const senhaValida = bcrypt.compareSync(req.body.password, usuario.password);

    if (!senhaValida) {
      return res.status(403).send(`Esta senha está incorreta`);
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

const deletaUsuario = async (req, res) => {
  try {
    const encontraUsuario = await usuarioSchema.findById(req.params.id);

    await encontraUsuario.delete();

    return res.status(200).send({
      mensagem: `O usuário '${encontraUsuario.id}' foi deletado com sucesso!`,
      encontraUsuario,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

module.exports = {
  getAllUsuarios,
  adicionaUsuario,
  login,
  deletaUsuario,
};
