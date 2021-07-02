const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name:{
      type: String,
      require: true
  },
  time:{
      type: String,
      require: true
  },
  trainno:{
      type: String,
      require: true,
      unique: true
  }
});

const trains = mongoose.model('trains', userSchema,'trains');

module.exports = trains;