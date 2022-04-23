const Joi = require('joi');

const ModuleCreate = Joi.object().keys({
    code: Joi.number().required(),
    description: Joi.string().required(),
    icon: Joi.string().required(),
});

const ModuleUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    code: Joi.number().required(),
    description: Joi.string().required(),
    icon: Joi.string().required(),
});

module.exports = {
    ModuleCreate,
    ModuleUpdate
}
