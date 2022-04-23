const Joi = require('joi');

const SpeciesCreate = Joi.object().keys({
    common_name: Joi.string().required(),
    scientific_name: Joi.string().required(),
});

const SpeciesUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    common_name: Joi.string().required(),
    scientific_name: Joi.string().required(),
});

module.exports = {
    SpeciesCreate,
    SpeciesUpdate
}
