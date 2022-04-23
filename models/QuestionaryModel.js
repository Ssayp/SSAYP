const { Schema, model } = require("mongoose");


const QuestionarySchema = Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        type:{
            type: String,
            required: true,
            enum: ['Tipo A', 'Tipo B']
        },
        is_active:{
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Questionary', QuestionarySchema);