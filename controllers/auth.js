const { response } = require('express');
const { validationResult } = require('express-validator');


const loginUsuario = ( req, resp = response ) =>{
    const { email, password } = req.body ;


    resp.status(201).json({
        ok: true,
        msg: 'Login', 
        email, 
        password

    })
}

const crearUsuario = ( req, resp = response ) =>{
    const { name, email, password } = req.body ;

    
    resp.status(201).json({
        ok: true,
        msg: 'Registro',
        name,
        email, 
        password

    })
}

const revalidarToken = ( req, resp = response ) =>{
    resp.json({
        ok: true,
        msg: 'Renew'

    })
}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}