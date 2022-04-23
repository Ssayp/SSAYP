const Joi = require('joi');

const FishingArtCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const FishingArtUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = {
    FishingArtCreate,
    FishingArtUpdate
}
