const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userschema = new Schema({
    email: String,
    password: String
})
module.exports = mongoose.model('user', userschema, 'users')