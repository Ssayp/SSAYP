const { Schema, model } = require("mongoose");


const SectionSchema = Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        idQuestionary:{
            type: Schema.Types.ObjectId,
            ref: "Questionary"
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
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

module.exports = model('Section', SectionSchema);