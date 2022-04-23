const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Product = Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})

const MonitoringAgriculturalPricesSchema = Schema(
    {
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        registry_number: {
            type: String,
            required: true,
            default: function() {
                return uuidv4();
            }
        },
        business_name_establishment: {
            type: String,
            required: true
        },
        person_type:{
            type: String,
            required: true,
            enum: ['natural', 'juridica']
        },
        localization:{
            type: String,
            required: true,
            enum: ['1', '2', '3']
        },
        nit: {
            type: String,
            required: true
        },
        informant_name: {
            type: String,
            required: true
        },
        identification: {
            type: String,
            required: true
        },
        vegetables: [{
            type: Product,
            required: true
        }],
        tubers: [{
            type: Product,
            required: true
        }],
        grains: [{
            type: Product,
            required: true
        }],
        meats: [{
            type: Product,
            required: true
        }],
        processed_products: [{
            type: Product,
            required: true
        }],
        issue_date: {
            type: Number,//epoch
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

module.exports = model('MonitoringAgriculturalPrices', MonitoringAgriculturalPricesSchema);