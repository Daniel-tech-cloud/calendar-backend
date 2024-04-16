/*
    Events Routes
    /api/events
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, borrarEvento } = require('../controllers/events');
const router = Router();

//Todas tiene qu estar validadas

// Obtener 
router.get( '/', validarJWT, getEventos );

// Obtener crear un nuevo evento
router.post( '/:id', validarJWT, crearEvento );

// Obtener un evento
router.put( '/:id', validarJWT, actualizarEvento );

// Borrar evento
router.delete( '/:id', validarJWT, borrarEvento );

module.exports = router;