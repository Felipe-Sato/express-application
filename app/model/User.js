const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true,
        maxLength :  255,
        minLength : 1
    },
    email: {
        type: 'string',
        required: true,
        unique: false,
        maxLength : 255,
        minLength :3
    },
    ra: {
        type: 'integer',
        required: true,
        unique: true,
        maxLength : 7,
        minLength : 7
    },
    cpf: {
        type: 'integer',
        required: true,
        unique: true,
        maxLength : 11,
        minLength : 11
    },
    role: {
        type: 'string',
        required: true,
        maxLength : 3,
        minLength : 3
    }
});