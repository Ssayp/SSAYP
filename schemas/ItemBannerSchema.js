const Joi = require('joi');

const ItemBannerCreate = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    banner_id: Joi.string().required(),
    order: Joi.number().required()
});

const ItemBannerUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    banner_id: Joi.string().required(),
    order: Joi.number().required()
});
   

module.exports = {
    ItemBannerCreate,
    ItemBannerUpdate
}

/**
 * 
 title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        banner_id: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "Banner"
        },
 */