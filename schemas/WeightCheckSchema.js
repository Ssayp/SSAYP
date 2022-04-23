const Joi = require('joi');

const WeightCheckCreate = Joi.object().keys({
    place: Joi.string().required(),
    motorShip: Joi.string().required(),
    create_by: Joi.string().required(),
    weight_check_specie: Joi.array().required(),
    signatureRegister: Joi.string().required(),
    signatureInstitution: Joi.string().required(),
    products_below_size: Joi.boolean().required(),
    number_of_ovate_females: Joi.number().required(),
    number_of_tails_below_size: Joi.number().required(),
    total_weight: Joi.number().required(),
    names_people_sampling: Joi.array().required(),
    issue_date: Joi.number().required(),
});

const WeightCheckUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    place: Joi.string().required(),
    motorShip: Joi.string().required(),
    create_by: Joi.string().required(),
    weight_check_specie: Joi.array().required(),
    signatureRegister: Joi.string().required(),
    signatureInstitution: Joi.string().required(),
    products_below_size: Joi.boolean().required(),
    number_of_ovate_females: Joi.number().required(),
    number_of_tails_below_size: Joi.number().required(),
    total_weight: Joi.number().required(),
    names_people_sampling: Joi.array().required(),
    issue_date: Joi.number().required(),
});

module.exports = {
    WeightCheckCreate,
    WeightCheckUpdate
}
