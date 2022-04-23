const Joi = require('joi');

const FishingAreaCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const FishingAreaUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = {
    FishingAreaCreate,
    FishingAreaUpdate
}
