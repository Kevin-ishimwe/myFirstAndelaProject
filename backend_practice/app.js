const express =require('express')
const app = express()
app.listen(1500,()=>{
    console.log("custom server running")
})
app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname})

})