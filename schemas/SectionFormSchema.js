const Joi = require('joi');

const SectionFormCreate = Joi.object().keys({
    description: Joi.string().required(),
    form_available: Joi.string().required(),
    duplicate: Joi.boolean(),
    nameQuestion: Joi.string(),
    moreOne: Joi.boolean()
});

const SectionFormUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    form_available: Joi.string().required(),
    duplicate: Joi.boolean(),
    nameQuestion: Joi.string(),
    moreOne: Joi.boolean()
});

module.exports = {
    SectionFormCreate,
    SectionFormUpdate
}
