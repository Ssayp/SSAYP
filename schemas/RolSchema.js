const Joi = require('joi');

const RolCreate = Joi.object().keys({
            code: Joi.string().required(),
            name: Joi.string().required()
        });

const RolUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    code: Joi.string().required(),
    name: Joi.string().required()
});
    

module.exports = {
    RolCreate,
    RolUpdate
}
