const express = require('express');
const noteModel = require('./models/note.model');
const app = express();
app.use(express.json());
//ye line ki help se req body me data jayega

/*
hm yaha different different api create karne wale hai
POST/notes= create a new note
GET/notes= get all notes
PATCH/notes/:id= update a note
DELETE/notes/:id= delete a note 
*/

app.post('/notes', async (req,res)=>{

    const data= req.body  /*  {title, description} */
   await noteModel.create({// ye await aync isliye kyuki hame nhi pata ki hamara server database se  connect karne me kitna time
   //  legaga isliye hm await lagate hai taki jab tak hamara server database se connect nhi hota tab 
   // tak ye aage ke code ko execute nhi karega
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"Note created successfully"})
})

app.get('/notes', async (req,res)=>{
    
const notes =await noteModel.find({

}) 

// ye line hamare database me se sare notes ko find karega aur return karega
// find hamesha ek array return karta hai chahe database me ek hi note ho ya bahut sare notes ho and
//  ek bhi nhi hai tab empty array tab null return kareega
// hm condition find and findone dono ke sath laga sakte hai.
//find hamesha array deti hai agar na ho tab "empty array" deti hai.
//findOne hamesha ek object deti hai agar na ho tab " null" deti hai


res.status(200).json({
    message:"Notes fetched successfully",
    notes:notes
})
});


app.delete('/notes/:id', async (req,res)=>{


    const id = req.params.id
    await noteModel.findByIdAndDelete({
        _id: id
    })
    res.status(200).json({
        message:"Note deleted successfully"
    })
})

app.patch('/notes/:id', async (req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id:id},{description:description})
    res.status(200).json({
        message:"Note updated successfully"
    })

})

module.exports = app;