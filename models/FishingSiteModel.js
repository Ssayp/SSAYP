const { Schema, model } = require('mongoose');

const  FishingSiteSchema = Schema(
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

module.exports = model('FishingSite', FishingSiteSchema);