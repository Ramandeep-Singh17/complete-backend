const mongoose = require('mongoose');


// ek post kaisi dikhegi, uske liye schema bnaenge
const postSchema = new mongoose.Schema({
       image: String,
       caption: String,
       // image jayega image kit per wha se aayega url so hm likh rhe hai string

});

const postModel = mongoose.model("post", postSchema);

// same type ke cheez ek collection me store hoti hai, 
// collection ka naam hmne "post" rakha hai, aur uska schema hmne postSchema rakha hai

module.exports = postModel;