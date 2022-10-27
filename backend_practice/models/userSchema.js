const {isEmail}=require('validator')


const mongoose =require('mongoose')
const Schema =mongoose.Schema
const users =new Schema({
    email:{
        type:String,
        required:[true,"email not set "],
        unique:true,
        validate:[isEmail,"enter valid email"]

    },
    password:{
        type:String,
        required:[true,"password not set"],
        minlength:[6,"minimum length is 6 characters"]
    }
})
module.exports=mongoose.model('user',users)