const { Schema, model } = require('mongoose');

const FishingMethodSchema = Schema(
    {
        description: {
            type: String,
            required: false
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

module.exports = model('FishingMethod', FishingMethodSchema);