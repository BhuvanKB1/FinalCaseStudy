const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    name: {
        type: String
    },
    date: {
        type: String
    }
});
const book = mongoose.model('book', userSchema);
module.exports = book;