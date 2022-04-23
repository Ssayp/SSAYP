const { Schema, model } = require('mongoose');

const ItemBannerSchema = Schema(
    {
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
        data_provider: {
            type: Object,
            required: false
        },
        order: {
            type: Number,
            required: false,
            enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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

module.exports = model('ItemBanner', ItemBannerSchema);