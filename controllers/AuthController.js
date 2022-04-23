const { response, request } = require("express");
const bycryptjs = require('bcryptjs');

const User = require("../models/UsuarioModel");
const { Actions } = require("../constants/actionLogs");
const { message } = require("../constants/response");

const { generateJWT } = require("../helpers/generar-jwt");
const { sendDataResponse, internalError, badRequestError } = require("../utils/response");

const Auth = async(req = request, res = response) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email}).populate('rol');
        if(!user){
            badRequestError(res, message.authError.email, { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true });
            return
        }
        if(!user.is_active){
            badRequestError(res, message.authError.noActive, { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true });
            return
        }
        const validPassword = bycryptjs.compareSync(password, user.password);

        if(!validPassword){
            badRequestError(res, message.authError.password, { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true });
            return
        }
        const token = await generateJWT(user.id);

        const objectData = {
            statusCode: 200,
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                phone: user.phone,
                identification: user.identification,
                area: user.area,
                rol: user.rol.code
            }
        }

        sendDataResponse(res, message.list, objectData, { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true })        

    }catch(error){
        internalError(res, error, { "Data": User, req, action: Actions.auth, isAuth: true });
    }
}

module.exports = {
    Auth
}