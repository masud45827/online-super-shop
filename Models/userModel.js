const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      division: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      }, 
      Thana: {
        type: String,
        required: true,
      },  
      address: {
        type: {},
        required: true,
      },
      role: {
        type: Number,
        default: 0,
      }, 
      image: 
      { 
        type: String,
        require: true
     }  
});
 
const User = mongoose.model('User' , userSchema);
module.exports = User;