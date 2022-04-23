const Joi = require('joi');

const BannerCreate = Joi.object().keys({
    title: Joi.string().required(),
    time: Joi.number().required(),
    quantity: Joi.number().required(),
    site_id: Joi.string().required()
});

const BannerUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    time: Joi.number().required(),
    quantity: Joi.number().required(),
    site_id: Joi.string().required()
});
   

module.exports = {
    BannerCreate,
    BannerUpdate
}