const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  FirstName:{
      type: String,
      require: true
  },
  LastName:{
      type: String,
      require: true
  },
  Address:{
      type: String,
      require: true
  },
  PhoneNo:{
    type: Number,
    require: true
},
});

const userinfo = mongoose.model('userinfo', userSchema,'userinfo');

module.exports = userinfo;