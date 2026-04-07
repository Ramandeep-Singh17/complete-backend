const mongoose = require('mongoose');


const noteSchema= new mongoose.Schema({
    title:String,
    description:String,

})

const noteModel= mongoose.model("note",noteSchema)

//hm noteModel create karte hai taki database  me  CRUD operations kar sake

module.exports= noteModel;