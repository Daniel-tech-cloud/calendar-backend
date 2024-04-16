
const { response } = require('express');


const getEventos = (req, resp = response) => {
    console.log('event');
    resp.json({
        ok: true,
        msg: 'getEventos'
    });
}

const crearEvento = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'crearEvento'
    });
}


const actualizarEvento = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'actualizarEvento'
    });
}

const borrarEvento = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'borrarEvento'
    });
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    borrarEvento
}