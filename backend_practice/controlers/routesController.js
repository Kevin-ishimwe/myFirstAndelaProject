const Users = require('../models/userSchema')



const getUsers=(req,res)=>{
    Users.find().then((allusers)=>{
        res.send(allusers)
    })

}
const new_user=(req,res)=>{
  

    const user_email =req.body.email
    const user_password =req.body.password
    const new_user=new Users ({
        email:user_email,
        password:user_password
    })
    new_user.save().then(()=>{
        console.log("added to database")
    })
    res.send("added to database")
    

}
module.exports={
    getUsers,new_user
}