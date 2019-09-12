var mongoose = require('mongoose');


var customerSchema = new mongoose.Schema({
     title: String,
   firstname: String,
   lastname: String,
   email: String,
   phone: Number,
   address: String,
    adhar: Number,
    policy: String,
    nominie: String,
    relation : String 
    // alternateEmails: {
    //   type : Object
    // }
   
});

var User =mongoose.model('User', customerSchema);
module.exports = User;