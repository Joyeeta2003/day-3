const mongoose=require("mongoose")

function coneectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to database");   
    })
}

module.exports = coneectToDB