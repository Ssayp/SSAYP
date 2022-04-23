const Joi = require('joi');

const CropCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const CropUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});


module.exports = {
    CropCreate,
    CropUpdate
}
