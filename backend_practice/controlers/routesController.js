const Users = require('../models/userSchema')
const mongoose =require('mongoose')


const getUsers=(req,res)=>{
    Users.find().then((allusers)=>{
        res.send(allusers)
    })

}
//function on endpoint ,adding a new user to dbs 
const new_user=(req,res)=>{

  try{
    const {email:user_email,password:user_password}=req.body
    
    const new_user=new Users ({
        email:user_email,
        password:user_password
    })
    
    new_user.save().then(()=>{
        console.log("added to database")
    })
    res.send("added to database")
  }
  catch (err){ 
    res.send("error not added to dbs")
    console.log(err)
  }

}

const me_dashboard=(req,res)=>{
  res.sendFile('E:/andela entry/backend_practice/views/dashy.html')

}






module.exports={
    getUsers,new_user,me_dashboard
}

