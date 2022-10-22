require('dotenv').config()
const express =require('express')
const app = express()
const mongoose =require('mongoose')
const router =require('./routes/authRoutes')
//connecting to a dbs
mongoose.connect(process.env.DB_LINK).then(()=>{
    app.listen(process.env.PORT,()=>{
        
        console.log(" server running,conected to database ")
    })
})
//midleware test
app.use(router)


//routes for pages 
app.use(express.static('./public'))

//endpoints to handle auth_pracytice

//user validation and JWT