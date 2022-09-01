const { response, request } = require("express");

const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosPost = async (req = request, res = response) => {
  const { nombre, email, password, rol } = req.body;

  const usuario = new Usuario({ nombre, email, password, rol });

  //Encriptar contrasena
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();

  res.json({
    msg: "Se creo correctamente el usuario",
    usuario,
  });
};

module.exports = {
  usuariosPost,
};
