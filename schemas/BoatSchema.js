const Joi = require('joi');

const BoatCreate = Joi.object().keys({
    description: Joi.string().required(),
    enrollment: Joi.string().required(),
});

const BoatUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    enrollment: Joi.string().required(),
});


module.exports = {
    BoatCreate,
    BoatUpdate
}
