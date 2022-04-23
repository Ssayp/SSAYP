const Joi = require('joi');

const UserSchema = Joi.object().keys({
    email: Joi.string().required(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    phone: Joi.number().required(),
    identification: Joi.number().required(),
    area: Joi.string().required(),
    password: Joi.string().required(),
    rol: Joi.string().required()
})
    
const UserUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    email: Joi.string().required(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    phone: Joi.number().required(),
    identification: Joi.number().required(),
    area: Joi.string().required(),
    rol: Joi.string().required(),
    password: Joi.string()
})

const AppUpdate = Joi.object().keys({
    email: Joi.string().required(),
    currentPassword: Joi.string().required(),
    newPassword: Joi.string().required()
})
    
module.exports = {
    UserSchema,
    UserUpdate,
    AppUpdate
}

