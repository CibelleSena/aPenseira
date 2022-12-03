const usuarioSchema = require("../model/usuarios")

const getAllUsuarios = async (req, res) => {
    try {
      const listaTodosUsuarios = await usuarioSchema.find();
      res.status(200).send(listaTodosUsuarios);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  const adicionaUsuario = async (req, res) => {
    try {
      const novoUsuario = new usuarioSchema(req.body);
  
      const salvarUsuario = await novoUsuario.save();
  
      return res.status(201).send({
        "message": "Novo Usuario criado com sucesso! Seja bem vindo",
        salvarFilme: salvarUsuario
      });
    } catch (error) {
      console.error(error);
    };
  };

  const deletaUsuario = async (req, res) => {
    try {
      const encontraUsuario = await usuarioSchema.findById(req.params.id)
  
      await encontraUsuario.delete()
  
      return res.status(200).send({
        "mensagem": `O usuário '${encontraUsuario.id}' foi deletado com sucesso!`,
         encontraUsuario
      })
  
    } catch (err) {
      return res.status(400).send({
        "mensagem": err.message
      });
    };
}



module.exports = {
getAllUsuarios,
adicionaUsuario,
deletaUsuario
}