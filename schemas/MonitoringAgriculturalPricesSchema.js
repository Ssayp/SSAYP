const Joi = require('joi');

const MonitoringAgriculturalPricesCreate = Joi.object().keys({
    create_by: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    vegetables: Joi.array().required(),
    tubers: Joi.array().required(),
    grains: Joi.array().required(),
    meats: Joi.array().required(),
    processed_products: Joi.array().required(),
    issue_date: Joi.number().required()
});

const MonitoringAgriculturalPricesUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    create_by: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    vegetables: Joi.array().required(),
    tubers: Joi.array().required(),
    grains: Joi.array().required(),
    meats: Joi.array().required(),
    processed_products: Joi.array().required(),
    issue_date: Joi.number().required()
});

module.exports = {
    MonitoringAgriculturalPricesCreate,
    MonitoringAgriculturalPricesUpdate
}