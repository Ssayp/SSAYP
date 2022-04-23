const Joi = require('joi');

const AgriculturalProducerFormCreate = Joi.object().keys({
    create_by: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    gender: Joi.string().required(),
    principal_activity: Joi.string().required(),
    self_consumption: Joi.string().required(),
    income_generation: Joi.string().required(),
    form_ternure: Joi.string().required(),
    surface: Joi.array().required(),
    water_resource: Joi.string().required(),
    cultivation_system: Joi.string().required(),
    crops_produced: Joi.array().required(),
    livestock_inventory: Joi.array().required(),
    cattle: Joi.array().required(),
    pigs: Joi.array().required(),
    birds: Joi.array().required(),
    latitude: Joi.number().required(),
    length: Joi.number().required(),
    issue_date: Joi.number().required()
});

const AgriculturalProducerFormUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    create_by: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    gender: Joi.string().required(),
    principal_activity: Joi.string().required(),
    self_consumption: Joi.string().required(),
    income_generation: Joi.string().required(),
    form_ternure: Joi.string().required(),
    surface: Joi.array().required(),
    water_resource: Joi.string().required(),
    cultivation_system: Joi.string().required(),
    crops_produced: Joi.array().required(),
    livestock_inventory: Joi.array().required(),
    cattle: Joi.array().required(),
    pigs: Joi.array().required(),
    birds: Joi.array().required(),
    latitude: Joi.number().required(),
    length: Joi.number().required(),
    issue_date: Joi.number().required()
});

module.exports = {
    AgriculturalProducerFormCreate,
    AgriculturalProducerFormUpdate
}
