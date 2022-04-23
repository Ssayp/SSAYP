const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const User = require('../models/UsuarioModel');

const validJWT = async(req = request, res = response, next) => {
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({
            message: "Solicitud sin token"
        })
    }

    try{
        const { uid } = jwt.verify(token, process.env.SECRET);

        const user = await User.findById(uid);

        if(!user)
            return res.status(401).json({
                message: "Token no valido"
            })

        if(!user.is_active)
            return res.status(401).json({
                message: "Token no valido"
            })
        
        req.user = user;
        next();

    }catch(error){
        res.status(401).json({
            message: "Token no valido"
        })
    }
}

module.exports = { validJWT }