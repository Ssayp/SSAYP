const { Schema, model } = require('mongoose');

const MenuSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: false
        },
        order: {
            type: Number,
            required: false
        },
        nivel:{
            type: Number,
            required: false,
            enum: [1, 2, 3]
        },
        site_id: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "WebSite"
        },
        father:{
            type:String,
            required: false,
            default: null
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

module.exports = model('Menu', MenuSchema);