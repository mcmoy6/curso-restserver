const {response, request} = require('express');

const usuariosGet = ( req = request, res = response ) => {

  const {q, nombre = 'no name', apikey} = req.query;

    res.json({
        ok: true,
        msg: 'get API - Desde el controlador',
        q,
        nombre, 
        apikey
    });

  }

  const usuariosPost = (req, res = response) => {

    const {id, nombre, apellido, edad} = req.body;

    res.json({
        msg: 'post API - Desde el controlador',
        id,
        nombre,
        apellido,
        edad
    });
  }

  const usuariosPut = (req, res = response) => {

    const id = req.params.idUsuario; // idUsuario, definido en la ruta del archivo usuarios.js

    res.json({
        msg: 'put API - Desde el controlador',
        id
    });

  }

  const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - desde el Pinche controlador'
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - desde el controlador'
    });
  }

  
  

  module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch

  }