const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const CattleSchema = Schema({
    total_cattle: {
        type: String,
        required: true
    },
    number_of_female_cattle: {
        type: String,
        required: true
    },
    number_of_male_cattle: {
        type: String,
        required: true
    },
    number_females_0_to_6_months: {
        type: String,
        required: true
    },
    number_females_6_to_12_months: {
        type: String,
        required: true
    },
    number_females_12_to_24_months: {
        type: String,
        required: true
    },
    number_females_older_than_24_months: {
        type: String,
        required: true
    },
    number_males_0_to_6_months: {
        type: String,
        required: true
    },
    number_males_6_to_12_months: {
        type: String,
        required: true
    },
    number_males_12_to_24_months: {
        type: String,
        required: true
    },
    number_males_older_than_24_months: {
        type: String,
        required: true
    },
});

const PigsSchema = Schema({
    total_pigs: {
        type: String,
        required: true
    },
    number_of_females: {
        type: String,
        required: true
    },
    number_of_males: {
        type: String,
        required: true
    },
    number_females_0_to_6_months: {
        type: String,
        required: true
    },
    number_females_6_to_12_months: {
        type: String,
        required: true
    },
    number_females_12_to_24_months: {
        type: String,
        required: true
    },
    number_females_older_than_24_months: {
        type: String,
        required: true
    },
    number_males_0_to_6_months: {
        type: String,
        required: true
    },
    number_males_6_to_12_months: {
        type: String,
        required: true
    },
    number_males_12_to_24_months: {
        type: String,
        required: true
    },
    number_males_older_than_24_months: {
        type: String,
        required: true
    },
});

const BirdsSchema = Schema({
    number_of_layers: {
        type: String,
        required: true
    },
    fattening_number: {
        type: String,
        required: true
    },
    dual_purpose_number: {
        type: String,
        required: true
    },
    number_of_roosters: {
        type: String,
        required: true
    },
});

const LivestockInventorySchema  = Schema({
    total_birds: {
        type: String,
        required: true
    },
    total_chicken: {
        type: String,
        required: true
    },
    total_hen: {
        type: String,
        required: true
    },
    total_sheep: {
        type: String,
        required: true
    },
    total_goats: {
        type: String,
        required: true
    },
    total_equines: {
        type: String,
        required: true
    },
    milk: {
        type: String,
        required: true
    },
    average_day_milk: {
        type: String,
        required: true
    },
    last_six_months_milk: {
        type: String,
        required: true
    },
    pig_meat: {
        type: String,
        required: true
    },
    average_cicle_pig: {
        type: String,
        required: true
    },
    last_six_months_pig: {
        type: String,
        required: true
    },
    chicken_eggs: {
        type: String,
        required: true
    },
    average_day_chicken: {
        type: String,
        required: true
    },
    last_six_months_chicken: {
        type: String,
        required: true
    },
    broilers: {
        type: String,
        required: true
    },
    average_cicle_chicken: {
        type: String,
        required: true
    },
});

const CropsProducedSchema  = Schema({
    crop: {
        type: String,
        required: true
    },
    sown_area: {
        type: String,
        required: true
    },
    harvest: {
        type: String,
        required: true
    }
});

const Surface = Schema({
    size:{
        type: String,
        required: true
    },
    land:{
        type: String,
        required: true
    },
    pasture:{
        type: String,
        required: true
    },
    forest:{
        type: String,
        required: true
    }
})

const AgriculturalProducerFormSchema = Schema(
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
        principal_activity: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        self_consumption: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        income_generation: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        form_ternure: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        surface: [{
            type: Surface,
            required: true
        }],
        water_resource: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        cultivation_system: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        crops_produced: [
            { 
                type: CropsProducedSchema,
                required: true
            }
        ],
        livestock_inventory: [{
            type: LivestockInventorySchema,
            required: true
        }],
        cattle: [{
                type: CattleSchema,
                required: true
        }],
        pigs: [{
            type: PigsSchema,
            required: true
        }],
        birds: [{
            type: BirdsSchema,
            required: true
        }],
        latitude: {
            type: Number,
            required: true
        },
        length: {
            type: Number,
            required: true
        },
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

module.exports = model('AgriculturalProducerForm', AgriculturalProducerFormSchema);