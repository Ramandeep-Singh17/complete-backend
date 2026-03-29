//server ko start karna 
const app = require('./src/app');

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})
// listen me hm port ke sath ek callback function bhi dete hai jisme hm console.log karte hai
//  ki server chal raha hai ya nahi.
//jab bhi server start hoga then callback execute hoga aur console me message print hoga
//  ki server is running at port 3000.