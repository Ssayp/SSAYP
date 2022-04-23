const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ItemOperationSchema  = Schema({
    gasoline_oneday: {
        type: String,
        required: false
    },
    other_oneday: {
        type: String,
        required: false
    },
    groceries_higherday: {
        type: String,
        required: false
    },
    ice_higherday: {
        type: String,
        required: false
    },
    gasoline_higherday: {
        type: String,
        required: false
    },
    bait_higherday: {
        type: String,
        required: false
    },
});

const LandedCatchSchema  = Schema({
    specie: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
});

/* const HandLineSchema  = Schema({
    method: {
        type: String,
        required: true
    },
    hook: {
        type: String,
        required: true
    }
});

const NasaSchema  = Schema({
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
});

const ReelSchema  = Schema({
    quantity_reel: {
        type: String,
        required: true
    },
    quantity_hooks: {
        type: String,
        required: true
    }
}); */

const NameOfFishermenSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

const MonitoringSchema = Schema(
    {
        registry_number: {
            type: String,
            required: true,
            default: function() {
                return uuidv4();
            }
        },
        site: {
            type: Schema.Types.ObjectId,
            ref: 'FishingSite',
            required: true
        },
        zone: {
            type: Schema.Types.ObjectId,
            ref: 'FishingArea',
            required: true
        },
        isle: {
            type: String,
            required: true,
            enum: ['SAI', 'PVA']
        },
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        departure_date: {
            type: Number,
            required: true
        },
        arrival_date: {
            type: Number,
            required: true
        },
        name_ship: {
            type: Schema.Types.ObjectId,
            ref: 'Boat',
            required: true
        },
        pr: {
            type: Boolean,
            required: true
        },
        type_motor: {
            type: String,
            required: true
        },
        quantity_motor:{
            type: String,
            required: true
        },
        power:{
            type: String,
            required: true
        },
        fishermen_number: {
            type: String,
            required: true
        },
        handLine: [{ type: String, require: false }],
        nasa:{
            type: String,
            required: false
        },
        reel_num:{
            type: String,
            required: false
        },
        hook_num:{
            type: String,
            required: false
        },
        diving: {
            type: String,
            required: true
        },
        departure_time: {
            type: Number,
            required: true
        },
        arrival_time: {
            type: Number,
            required: true
        },
        schedule: {
            type: Boolean,
            required: true
        },
        landed_catch: [{ type: LandedCatchSchema, required: true }],
        observation: {
            type: String,
            required: true
        },
        name_of_fishermen: [{ type: NameOfFishermenSchema, required: true }],
        operating_expense: [{ type: ItemOperationSchema, required: true }],
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

module.exports = model('Monitoring', MonitoringSchema);