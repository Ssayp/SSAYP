const Joi = require('joi');

const MeasurementCreate = Joi.object().keys({
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    measured_specie: Joi.array().required(),
    issue_date: Joi.number().required()
});

const MeasuremenUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    measured_specie: Joi.array().required(),
    issue_date: Joi.number().required()
});

module.exports = {
    MeasurementCreate,
    MeasuremenUpdate
}
