const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ProductionExpensesSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    totalCycle: {
        type: String,
        required: true
    },
    lastSixMonth: {
        type: String,
        required: true
    },
});

const CultivationSalesSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    sale_quantity: {
        type: String,
        required: true
    },
    sales_revenue: {
        type: String,
        required: true
    },
});

const TotalProductSalesSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    unit:{
        type: String,
        required: true
    },
    quantity_sold: {
        type: String,
        required: true
    },
    total_sales_income: {
        type: String,
        required: true
    },
});

const IncomeDifferentProductsSchema  = Schema({
    rental: {
        type: String,
        required: true
    },
    rent:{
        type: String,
        required: true
    },
    other:{
        type: String,
        required: true
    },
});

const CostsAndIncomeSchema = Schema(
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
        gender:{
            type: String,
            required: true,
            enum: ['M', 'F']
        },
        production_expenses: [{ type: ProductionExpensesSchema, required: true }],
        cultivation_sales: [{ type: CultivationSalesSchema, required: true }],
        total_product_sales: [{ type: TotalProductSalesSchema, required: true }],
        income_different_products: [{ type: IncomeDifferentProductsSchema, required: true }],
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

module.exports = model('CostsAndIncome', CostsAndIncomeSchema);