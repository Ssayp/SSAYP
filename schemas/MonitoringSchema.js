const Joi = require('joi');

// registry_number: Joi.string().required(),
const MonitoringCreate = Joi.object().keys({
    site: Joi.string().required(),
    zone: Joi.string().required(),
    isle: Joi.string().required(),
    create_by: Joi.string().required(),
    departure_date: Joi.number().required(),
    arrival_date: Joi.number().required(),
    name_ship: Joi.string().required(),
    pr: Joi.bool().required(),
    type_motor: Joi.string().required(),
    quantity_motor: Joi.string().required(),
    power: Joi.string().required(),
    fishermen_number: Joi.string().required(),
    handLine: Joi.array().required(),
    nasa: Joi.string().required(),
    reel_num: Joi.string().required(),
    hook_num: Joi.string().required(),
    diving: Joi.string().required(),
    departure_time: Joi.number().required(),
    arrival_time: Joi.number().required(),
    schedule: Joi.bool().required(),
    landed_catch: Joi.array().required(),
    observation: Joi.string().required(),
    name_of_fishermen: Joi.array().required(),
    operating_expense: Joi.array().required(),
    issue_date: Joi.number().required()
});

const MonitoringUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    site: Joi.string().required(),
    zone: Joi.string().required(),
    isle: Joi.string().required(),
    create_by: Joi.string().required(),
    departure_date: Joi.number().required(),
    arrival_date: Joi.number().required(),
    name_ship: Joi.string().required(),
    pr: Joi.bool().required(),
    type_motor: Joi.string().required(),
    quantity_motor: Joi.string().required(),
    power: Joi.string().required(),
    fishermen_number: Joi.string().required(),
    handLine: Joi.array().required(),
    nasa: Joi.string().required(),
    reel_num: Joi.string().required(),
    hook_num: Joi.string().required(),
    diving: Joi.string().required(),
    departure_time: Joi.number().required(),
    arrival_time: Joi.number().required(),
    schedule: Joi.bool().required(),
    landed_catch: Joi.array().required(),
    observation: Joi.string().required(),
    name_of_fishermen: Joi.array().required(),
    operating_expense: Joi.array().required(),
    issue_date: Joi.number().required()
});

module.exports = {
    MonitoringCreate,
    MonitoringUpdate
}
