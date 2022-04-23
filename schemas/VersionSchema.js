const Joi = require('joi');

const VersionCreate = Joi.object().keys({
    description: Joi.string().required(),
    code: Joi.string().required(),
});

const VersionUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    it_is_under_maintenance: Joi.boolean().required(),
    code: Joi.string().required(),
});

module.exports = {
    VersionCreate,
    VersionUpdate
}
