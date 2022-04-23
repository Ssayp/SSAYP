const { Schema, model } = require('mongoose');

const  FishingAreaSchema = Schema(
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

module.exports = model('FishingArea', FishingAreaSchema);