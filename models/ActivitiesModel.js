const { Schema, model } = require('mongoose');

const ActivitiesSchema = Schema(
    {
        site: {
            type: Schema.Types.ObjectId,
            ref: 'FishingSite',
            required: true
        },
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        art: {
            type: Schema.Types.ObjectId,
            ref: 'FishingArt',
            required: true
        },
        active: {
            type: Number,
            required: true
        },
        sample: {
            type: Number,
            required: true
        },
        issue_date: {
            type: Number,//epoch
            required: true
        },
        observation: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Activities', ActivitiesSchema);