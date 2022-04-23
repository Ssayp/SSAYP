const { Schema, model } = require('mongoose');

const WebPageSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: false
        },
        slug: {
            type: String,
            required: false
        },
        site_id: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "WebSite"
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

module.exports = model('WebPage', WebPageSchema);