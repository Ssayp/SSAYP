const { Schema, model } = require('mongoose');

const BannerSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: false
        },
        quantity: {
            type: Number,
            required: false
        },
        site_id: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "WebSite"
        },
        is_active: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Banner', BannerSchema);