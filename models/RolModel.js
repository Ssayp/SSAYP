const { Schema, model } = require('mongoose');

const RolSchema = Schema(
    {
        code:{
            type: String,
            required: true,
            unique: true
        },
        name:{
            type: String,
            required: true
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

module.exports = model('Rol', RolSchema);