const Joi = require('joi');

const QuestionFormCreate = Joi.object().keys({
    nameQuestion: Joi.string().required(),
    description: Joi.string().required(),
    data: Joi.array(),
    widget_type: Joi.string().required(),
    dataType: Joi.string().required(),
    required: Joi.boolean().required(),
    min: Joi.number(),
    max: Joi.number(),
    regex: Joi.string(),
    section_form: Joi.string().required(),
});

const QuestionFormUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    nameQuestion: Joi.string().required(),
    description: Joi.string().required(),
    data: Joi.any().required(),
    widget_type: Joi.string().required(),
    dataType: Joi.string().required(),
    required: Joi.boolean().required(),
    min: Joi.number(),
    max: Joi.number(),
    regex: Joi.string(),
    section_form: Joi.string().required(),
});

module.exports = {
    QuestionFormCreate,
    QuestionFormUpdate
}
