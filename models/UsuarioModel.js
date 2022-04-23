const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true
        },
        name:{
            type: String,
            required: true
        },
        surname:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true
        },
        identification:{
            type: Number,
            required: true
        },
        area:{
            type: String,
            required: true,
            enum: ['pesca', 'agro', 'admin']
        },
        password:{
            type: String,
            required: true
        },
        rol:{
            type: Schema.Types.ObjectId,
            ref: 'Rol'
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

UsuarioSchema.methods.toJson = function () {
    const { __v, password, _id, ...user } = this.Object();
    user.uid = _id;
    return user;
}

module.exports = model('Usuario', UsuarioSchema);