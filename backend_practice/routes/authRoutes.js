//controllers
const appControllers =require('../controlers/routesController')
const express =require('express')
const router =express.Router()

router.use(express.json())




router.get("/",(req,res)=>{
    res.sendFile('E:/andela entry/backend_practice/views/index.html')

})
router.get('/login',(req,res)=>{
    res.sendFile('E:/andela entry/backend_practice/views/login.html')

})
router.get('/create-account',(req,res)=>{
    res.sendFile('E:/andela entry/backend_practice/views/createAccount.html')

})

//this route gets all the users login info so we can validate the user 
router.get('/login-auth',appControllers.getUsers)
//this end point adds a user to the database
router.post('/add-user',appControllers.new_user)



//route protection
router.get('/me_dashboard',appControllers.me_dashboard)





module.exports=router
