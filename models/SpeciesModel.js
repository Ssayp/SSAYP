const { Schema, model } = require('mongoose');

const SpeciesSchema = Schema(
    {
        common_name: {
            type: String,
            required: false
        },
        scientific_name: {
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

module.exports = model('Species', SpeciesSchema);