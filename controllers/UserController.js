const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/UsuarioModel');
const { disableService, listService, updateService } = require('../utils/transversalService');
const { message } = require('../constants/response');
const { Actions } = require('../constants/actionLogs');
const { badRequestError, sendDataResponse, genericResponse } = require('../utils/response');

const list = async(req = request, res = response) => {
    listService(User, req, res, {populate0: "rol"});
}

const create = (req = request, res = response) => {
    try{
        const { email, name, surname, phone, identification, area, password, rol } = req.body;

        const usuario = new User({ email, name, surname, phone, identification, area, password, rol});

        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt);

        usuario.save(function(error, saved){
            if(error)
                badRequestError(res, error, { "Data": User, req, action: Actions.create, object: `body: ${req.body}` });
            else{
                const objectData = {
                    statusCode: 200,
                    message: message.create,
                    _id: saved._id
                };
                sendDataResponse(res, message.list, objectData, {
                    "Data": User,
                    req,
                    action: Actions.list
                });
            }
        })
    }catch(error){
        internalError(res, error, { "Data": User, req, action: Actions.create });
    }
}


const update =  async(req = request, res = response) => {
    try{
        const { _id, email, password, rol, ...resto } = req.body;

        if(password){
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);

            const update = { ... req.body, password: resto.password};

            User.findByIdAndUpdate(_id, update,
                (error) => {
                    if(error)
                        badRequestError(res, error, { "Data": User, req, action: Actions.update, object: `id: ${update._id} | body: ${update}` });
                    else
                        genericResponse(res, message.update, { "Data": User, req, action: Actions.update, object: `id: ${update._id} | body: ${update}` });
                }
            
            );
        }else
            updateService(User, req, res);

        
    }catch(error){
        internalError(res, error, { "Data": User, req, action: Actions.update });
    }
}

const changePassword = async(req = request, res = response) => {
    const { email, currentPassword, newPassword } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            badRequestError(res, message.authError.email, { "Data": User, req, action: Actions.changePassword, object: `Email: ${email}` });
            return
        }
        if(!user.is_active){
            badRequestError(res, message.authError.noActive, { "Data": User, req, action: Actions.changePassword, object: `Email: ${email}`});
            return
        }
        
        const validPassword = bcryptjs.compareSync(currentPassword, user.password);
        
        if(!validPassword){
            badRequestError(res, message.authError.password, { "Data": User, req, action: Actions.changePassword, object: `Email: ${email}` });
            return
        }
        
        if(newPassword){
            const salt = bcryptjs.genSaltSync();
            
            const hashPassword = bcryptjs.hashSync(newPassword, salt);

            const update = { _id: user._id, email: user.email, rol: user.rol, password: hashPassword};

            User.findByIdAndUpdate(user._id, update,
                (error) => {
                    if(error)
                        badRequestError(res, error, 
                            { 
                                "Data": User, 
                                req, 
                                action: Actions.changePassword, 
                                object: `id: ${user._id}` 
                            });
                    else
                        genericResponse(res, message.update, 
                            { 
                                "Data": User, 
                                req, 
                                action: Actions.changePassword, 
                                object: `id: ${user._id}` 
                            });
                }
            
            );
        }
    
    }catch(error){
        internalError(res, error, { "Data": User, req, action: Actions.changePassword });
    }
}


const disable = (req = request, res = response) => {
    disableService(User, req, res, null);
}

module.exports = {
    create,
    list,
    update,
    disable,
    changePassword
}