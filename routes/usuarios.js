const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controller');

const { Router } = require('express');

const router = Router();

 router.get('/', usuariosGet);

 router.post('/', usuariosPost);

 router.put('/:idUsuario', usuariosPut);

 router.delete('/', usuariosDelete);

 router.patch('/', usuariosPatch);


module.exports = router;