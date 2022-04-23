const Joi = require('joi');

const FishingSiteCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const FishingSiteUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = {
    FishingSiteCreate,
    FishingSiteUpdate
}
