const Joi = require('joi');

const FishingTechniqueCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const FishingTechniqueUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = {
    FishingTechniqueCreate,
    FishingTechniqueUpdate
}
