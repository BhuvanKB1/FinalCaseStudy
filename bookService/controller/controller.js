const Boooking = require("../models/bookModel");
const axios = require("axios");
const { Mongoose } = require("mongoose");
const Booking = require("../models/bookModel");
const jwt = require("jsonwebtoken");
var Razorpay = require("razorpay");

let instance = new Razorpay({
  key_id: "rzp_test_Kqtq7BRSHRsILq", // your `KEY_ID`
  key_secret: "239n5yMgqitFtMcJQOJpl3ff", // your `KEY_SECRET`
});


module.exports.bookDetails_post = (req, res) => {
  
  axios
    .put(
      "http://localhost:1001/updateTrainSeat/" + req.body.train_id,
      { numOfticket: req.body.numOfSeats }
    )
    .then((trains) => {
      if (trains.data === "succ") {
        const BookingObj = {
          user_id: req.userId,
          train_id: req.body.train_id,
          Departure: new Date(req.body.Departure),
          numOfSeats: req.body.numOfSeats,
        };
        Boooking.create(BookingObj).then((data) => {
          res.status(200).json({ message: "Ticket Booked Successfully!" });
        });
      } else {
        res.status(205).json({ message: "Ticket Not Booked !" });
      }
    });
};

//booking details

module.exports.viewBook = async (req, res) => {
  const query = { user_id: req.userId };
  const user = await Boooking.findOne(query);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).json({ message: "Empty" });
  }
};

//train delete
module.exports.deleteBookDetail = (req, res) => {
  try {
    // if(req.userType){
    Boooking.findByIdAndRemove({ _id: req.params.id })
      .then((items) => {
        console.log(items + "is deleted");
        res.status(200).json({ message: "ticket Deleted Successfully!" });
      })
      .catch((err) => {
        res
          .status(201)
          .json({ message: "Inter Error while deleting details " });
      });
    // }
  } catch (err) {
    res.status(400).json({ message: "page not found" });
  }
};
