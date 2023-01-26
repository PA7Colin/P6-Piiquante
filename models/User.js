const mongoose = require('mongoose');

// AVOIR QU UNE ADRESSE MAIL PAR USER AVEC MANGOOSE 
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true} 
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);