const mongoose=require("mongoose")

function coneectToDB(){
    mongoose.connect("")
    .then(()=>{
        console.log("connected to database");   
    })
}

module.exports = coneectToDB