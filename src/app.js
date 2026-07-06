const express=require("express")
const noteModel= require("./models/notes.model")
const app= express();

app.use(express.json())

app.post("/notes",async (req, res)=>{
    const {title, description} = req.body

    const note=await noteModel.create({
        title, description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })
})

app.get("/notes",async (req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"note fetch sucessfully",
        notes
    })
})

// app.delete("/notes/:index",(req,res)=>{
//     delete notes[req.params.index];
//     res.status(204).json({
//         message:"note deleted sucessfully"
//     })
// })

// app.patch("/notes/:index", (req,res)=>{
//     notes[req.params.index].description = req.body.description;
//     res.status(200).json({
//         message:"note update sucessfully"
//     })
// })

module.exports = app;