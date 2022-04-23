const { Schema, model } = require('mongoose');

const  ActionLogSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: false
        },
        model: {
            type: String,
            required: false
        },
        action: {
            type: String,
            required: false
        },
        interface:{
            type: String,
            enum: ['Web', 'Mobile'],
            required: false
        },
        info:{
            type: String,
            required: false
        },
        type:{
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('ActionLog', ActionLogSchema);