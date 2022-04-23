const { Schema, model } = require('mongoose');

const VersionSchema = Schema(
    {
        description: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            required: true,
            default: true
        },
        it_is_under_maintenance: {
            type: Boolean,
            required: true,
            default: false
        },
        code: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = model('Version', VersionSchema);