const Joi = require('joi');

const WebPageCreate = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    slug: Joi.string().required(),
    site_id: Joi.string().required()
})

const WebPageUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
    slug: Joi.string().required(),
    site_id: Joi.string().required()
})

module.exports = {
    WebPageCreate,
    WebPageUpdate
}