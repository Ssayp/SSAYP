const { response, request } = require("express");
const bycryptjs = require('bcryptjs');

const validTokenApp = async(req = request, res = response, next) => {
    const token = req.header('Authorization');

    console.log("token ", token);

    if(!token){
        return res.status(401).json({
            message: "Solicitud sin token"
        })
    }

    try{
        const validToken = bycryptjs.compareSync(process.env.SECRET_APP, token);

        console.log("secret ", process.env.SECRET_APP);
        console.log("validToken ", validToken);

        if(validToken)
            next();
        else
            return res.status(401).json({
                message: "Token no valido"
            })

    }catch(error){
        res.status(401).json({
            message: "Token no valido"
        })
    }
}

module.exports = { validTokenApp }