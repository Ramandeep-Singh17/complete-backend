// server ko create karna

const express = require('express');

const app = express();
//middleware use karna
app.use(express.json())



//postman ke body se jo data aata hai express use read nhi kar sakta
//  isliye hm middleware banate hai taki express us data ko read kar sake
// postman fake froentend hai jisme hm apna data bhejte hai aur wo data backend me aata hai



// hm notes app bana rhe hai jisme user apne notes ko create,  read, update aur delete
//  kar sakta hai
// user frontend per hai and wha se wo data dega and data frontend se aayega so hm 
//post method ka use karenge data receive karne ke liye.

const notes=[]


// ye hmara notes api ban gya
// "post" method ka use karenge data receive karne ke liye and usme bhi hm req per dhyan denge
app.post('/notes', (req, res) => {
    notes.push(req.body)  // frontend se jo data aayega usko notes array me push kar denge


    res.status(201).json({message: "note created successfully"})  
    // frontend ko response me ek message bhej denge ki note create ho gya hai


  console.log(req.body)
  res.send(req.body)  // frontend se jo data aayega usko response me wapas bhej denge
})  
  // req.body me hmara data aayega jo frontend se aayega
  // is data ko hm notes array me push kar denge
  


  // get se hmara data server se frontend  per jayega.
  app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })  // frontend ko response me notes array bhej denge
  })

  // app.delete karna ek index ko
    app.delete('/notes/:index', (req, res) => {
        const index = req.params.index 
        // req param se dynamically index ko change karta hai hai
         // frontend se jo index aayega usko index variable me store kar denge
        delete notes[ index ]  // notes array me se index ke hisab se ek element delete kar denge
        res.status(200).json({
            message: "note deleted successfully"
        })  // frontend ko response me ek message bhej denge ki note delete ho gya hai
    })

 

module .exports = app
