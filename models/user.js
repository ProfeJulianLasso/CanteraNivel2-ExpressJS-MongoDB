const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/**
 * Función para validar la estructura de un correo electrónico
 * @param string Correo a validar
 * @returns boolean
 */
const validateEmail = (email) => {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
};

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 90
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'El correo es requerido'],
        unique: true,
        validate: {
            validator: validateEmail,
            message: 'Por favor digite un correo válido'
        }
    },
    genre: {
        type: String,
        required: false,
        enum: ['masculino', 'femenino']
    }
}, { timestamps: true });

userSchema.plugin(mongooseSoftDelete);

module.exports = User = mongoose.model('User', userSchema);