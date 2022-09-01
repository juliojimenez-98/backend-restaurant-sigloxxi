const { Router } = require("express");
const { usuariosPost } = require("../controllers/usuarios.controller");

const router = Router();

router.post("/usuario", usuariosPost);

module.exports = router;
