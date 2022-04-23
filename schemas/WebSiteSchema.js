const Joi = require('joi');

const WebSiteCreate = Joi.object().keys({
    idSite: Joi.string().required(),
    title: Joi.string().required(),
    slogan: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    footer: Joi.string().required(),
    domain: Joi.string().required(),
    color_schemes: Joi.object().required(),
    social_links: Joi.array().required()
});

const WebSiteUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    idSite: Joi.string().required(),
    title: Joi.string().required(),
    slogan: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    footer: Joi.string().required(),
    domain: Joi.string().required(),
    color_schemes: Joi.object().required(),
    social_links: Joi.array().required()
});
   

module.exports = {
    WebSiteCreate,
    WebSiteUpdate
}