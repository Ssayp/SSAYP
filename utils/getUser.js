const { request } = require("express");
const jwt = require("jsonwebtoken");

const User = require('../models/UsuarioModel');

//Return verification of user

const getUser = async (req =  request) => {
    try{
        const token = req.header('Authorization');

        const { uid } = jwt.verify(token, process.env.SECRET);

        const user = await User.findById(uid);

        return user;
    }catch(error){
        const user = { };
        return user;
    }
    

}

module.exports = {
    getUser
}