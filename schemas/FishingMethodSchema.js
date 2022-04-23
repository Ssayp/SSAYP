const Joi = require('joi');

const FishingMethodCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const FishingMethodUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = {
    FishingMethodCreate,
    FishingMethodUpdate
}
