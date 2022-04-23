const Joi = require('joi');

const CostsAndIncomeCreate = Joi.object().keys({
    create_by: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    gender: Joi.string().required(),
    production_expenses: Joi.array().required(),
    cultivation_sales: Joi.array().required(),
    total_product_sales: Joi.array().required(),
    income_different_products: Joi.array().required(),
    issue_date: Joi.number().required(),
});

const CostsAndIncomeUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    create_by: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    gender: Joi.string().required(),
    production_expenses: Joi.array().required(),
    cultivation_sales: Joi.array().required(),
    total_product_sales: Joi.array().required(),
    income_different_products: Joi.array().required(),
    issue_date: Joi.number().required(),
});

module.exports = {
    CostsAndIncomeCreate,
    CostsAndIncomeUpdate
}
