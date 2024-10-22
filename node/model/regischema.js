const mongoose = require('mongoose')
const Schema = mongoose.Schema

const regischema = new Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const register = mongoose.model('register',regischema)

module.exports = register