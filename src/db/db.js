const mongoose = require('mongoose');
async function connectDB() {

    await mongoose.connect("mongodb+srv://YT:emR0Yh0ODc5zYeYG@cluster0.frkqyzb.mongodb.net/halley")
    // ye server ko actual data se connect karega
    // isme hm apna url denege jaha hamara data store hoga as paramter
    //hmne jolink ke baad halley diya hai wo hamre cluster ke andar jo database hai uska naam hai
    // ye amangoose .coonect bahut powerful function hai jo hamare server ko database se connect karne me madad 
    // karta hai use search karke hamara database mil jata hai aur agar database nhi hota to ye use create bhi kar dega
   
// hm ye nhi kah sakte hi hamara server kitni der me hamare databse se connect karega isliye hm await lagate hai
// await ka matlab hai ki jab tak hamara server database se connect nhi hota tab tak ye aage ke code ko execute nhi karega
// and jab bhi await lagta hai async function ke andar lagta hai to wo function asynchronous function ban jata hai
//  aur asynchronous function me await ka use hota hai jab bhi hamara server database se connect karne ki koshish karega 
// to wo is line par ruk jayega jab tak wo database se connect nhi hota
// wait ke sath async bydefault hota hai.
console.log("Database connected successfully");

}

module.exports = connectDB;