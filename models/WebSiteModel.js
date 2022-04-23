const { Schema, model } = require('mongoose');

const WebSiteSchema = Schema(
    {
        idSite:{
            type: String,
            required: false,
            unique: true
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        slogan: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        footer:{
            type: String,
            required: false
        },
        domain: {
            type: String,
            required: false
        },
        color_schemes: {
            type: Object,
            required: false
        },
        social_links: {
            type: Array,
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

module.exports = model('WebSite', WebSiteSchema);

/**
 * 
 // site example
site = {
id: 1,

color_schemes: {
    primary: "#ffff",
    secondary: "#ffff",
    hover: "#ffff",
    link_visited: "#ffff",
    background_primary: "#ffff",
    background_secondary: "#ffff",
},
is_active: true,
// query related pages
pages: [PageObj1, PageObj2, PageObj3],
social_links = [
    {
    id: 1,
    title: "Facebook",
    text: "lorem",
    icon: "lorem",
    url: "http://sepec.aunap.gov.co/",
    is_active: true,
    },
    {
    id: 2,
    title: "youtube",
    text: "lorem",
    icon: "lorem",
    url: "http://sepec.aunap.gov.co/",
    is_active: true,
    },
]
};
 */