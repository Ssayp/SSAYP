const { Schema, model } = require('mongoose');

const dataSchema  = Schema({
    idData: {
        type: String,
        required: true
    },
    descriptionData: {
        type: String,
        required: true
    }
});

const QuestionFormSchema = Schema(
    {
        nameQuestion: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        data: [{ type: dataSchema, required: false }],
        widget_type: {
            type: String,
            required: true
        },
        dataType: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            required: true
        },
        min: {
            type: Number,
            required: false
        },
        max: {
            type: Number,
            required: false
        },
        regex: {
            type: String,
            required: false
        },
        section_form: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'SectionForm'
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

module.exports = model('QuestionForm', QuestionFormSchema);