const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
     username: String,
        email: String,
        password: String,

})




const UserModel = mangoose.model('User', userSchema);

module.exports = UserModel;