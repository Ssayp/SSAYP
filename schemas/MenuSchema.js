const Joi = require('joi');

const MenuCreate = Joi.object().keys({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    order: Joi.number().required(),
    site_id: Joi.string().required(),
    nivel: Joi.number().required(),
    father: Joi.any()
});

const MenuUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    slug: Joi.string().required(),
    order: Joi.number().required(),
    site_id: Joi.string().required(),
    nivel: Joi.number().required(),
    father: Joi.any()
});

module.exports = {
    MenuCreate,
    MenuUpdate
}
