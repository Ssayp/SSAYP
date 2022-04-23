const Joi = require("joi");

const GenericDisable = Joi.object().keys({
    id: Joi.string().required(),
    is_active: Joi.boolean().required()
});

const GenericDataSave = Joi.object().keys({
    idFormulario: Joi.string().required()
});

const GenericHistoric = Joi.object().keys({
    idUser: Joi.string().required()
});

module.exports = {
    GenericDisable,
    GenericDataSave,
    GenericHistoric
}

//idUser