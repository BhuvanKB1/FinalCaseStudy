const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
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
        type:Date,
        required:true   
    },
    time: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    }
}) 

const Search = mongoose.model('trains',searchSchema);
module.exports = Search;