require("dotenv").config()
const app=require("./src/app");
const coneectToDB = require("./src/config/datbase")
const mongoose= require("mongoose");


coneectToDB()

app.listen(3000,()=>{
    console.log("app is running is port 3000");
})

