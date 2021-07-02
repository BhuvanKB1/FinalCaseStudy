const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    train_id: {
        type:Number,
        unique:true,
        required:true       
    },
    name: {
        type:String,
        required:true       
    },
    source: {
        type:String,
        required:true       
    },
    destination: {
        type:String,
        required:true
    },
    date: {
        type: String,
        required:true
          
    },
    time: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    numOfticket: {
        type: Number,
        default: 100
    }
});

const trains = mongoose.model('trains', userSchema);

module.exports = trains;