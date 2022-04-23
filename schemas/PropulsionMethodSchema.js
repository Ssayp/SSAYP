const Joi = require('joi');

const PropulsionMethodCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const PropulsionMethodUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = {
    PropulsionMethodCreate,
    PropulsionMethodUpdate
}
