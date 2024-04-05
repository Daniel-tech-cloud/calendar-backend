/*
    Rutas de usuarios / Auth 
    host + /api/auth
    */
// const express = require ('express');
// const router = express.Router;

const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


router.post(
    '/new', 
    // middlewares
    [ 
        check('name', 'El nombre obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 carcteres').isLength({ min: 6 }),
        validarCampos
    ] , 
    crearUsuario);

router.post(
    '/', 
    // middlewares
    [ 
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 carcteres').isLength({ min: 6 }),
        validarCampos
    ] , 
    loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;