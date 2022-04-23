const { Schema, model } = require('mongoose');

const FishingArtSchema = Schema(
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

module.exports = model('FishingArt', FishingArtSchema);