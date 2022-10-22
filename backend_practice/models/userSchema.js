const mongoose =require('mongoose')
const Schema =mongoose.Schema
const users =new Schema({
    email:String,
    password:String
})
module.exports=mongoose.model('user',users)