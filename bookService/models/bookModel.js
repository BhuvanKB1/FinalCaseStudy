const mongoose = require('mongoose')


const bookingSchema = mongoose.Schema({
    user_id : {
        type:String,
        required : true
    },
    train_id : {
        type:String,
        required : true
    },
    booked_time : {
        type : Date,
        default : Date.now()
        
    },
    Departure:{
        type:Date,
        required:true
    },
    numOfSeats:{
        type: Number
    }


})

const Booking = mongoose.model('bookingDetail',bookingSchema)

module.exports = Booking