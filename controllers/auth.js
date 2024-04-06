const { response } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/user');


const loginUsuario = ( req, resp = response ) =>{
    const { email, password } = req.body ;

    resp.status(201).json({
        ok: true,
        msg: 'Login', 
        email, 
        password

    })
}

const crearUsuario = async( req, resp = response ) =>{

    const {  email, password } = req.body ;
    try {
        let usuario = await Usuario.findOne({ email });
        if( usuario ){
            return resp.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese correo'
            })
        }
        usuario = new Usuario (req.body);  
          
        //* Encriptación de contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt );
        
        await usuario.save();
    
        resp.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
    
        })
        
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
    
        })
    }

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