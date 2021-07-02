const trains = require("../model/train");
const userinfo = require("../model/userinfo")
const axios = require('axios');
const { Mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");


  module.exports.trains_get = (req,res) => {
    trains.find()
        .then((result)=>{
            res.status(200).send(result);
        })
        .catch((err)=>{
                res.status(400).json({ message: "Trains not available" });
        })
}


module.exports.trains_getbyId = (req,res) => {
    const id = req.params.id;
    trains.findById(id)
        .then((result)=>{
            res.status(200).send(result);
        })
        .catch((err)=>{
            res.status(400).json({ message: "Trains not found" });
        })
}

module.exports.trains_post = async (req,res) => {
    const Trains = new trains(req.body)
    Trains.save()
        .then((result)=>{
            res.status(200).send(result);
        })
        .catch((err)=>{
            res.status(400).json({ message: "Train not Added" });
        })
}


module.exports.trains_update = (req,res) =>{
   const id = req.params.id;
   const updates = req.body;
    trains.findOneAndUpdate(id,updates)
        .then(()=>{
            Flight.findById(id)
                .then((result)=>{
                    res.status(200).send(result); 
                })
        })
        .catch((err)=>{
            res.status(400).json({ message: "Train not updated" });
        })
  
}


module.exports.trains_delete = (req,res) => {
    const id = req.params.id;
    trains.findByIdAndDelete(id)
        .then((result)=>{
            res.status(200).send("Train deleted");
        })
        .catch((err)=>{
            res.status(400).json({ message: "Train not deleted" });
        })  

}




module.exports.UpdateTrainSeat = (req,res) => {
    
    trains.findByIdAndUpdate({_id:req.params.id}, { $inc: {numOfticket : -req.body.numOfticket}})
    .then(
        data => {

            res.send("succ")
        }).catch(err => {
            res.send("error")

    })
}









// /** 
//  *  @swagger
//  *  /userinfo:
//  *  get:
//  *      summary: "To get the list of all trains"
//  *      responses: 
//  *          '200':
//  *              description: A successful response
//  */
// app.get('/userinfo', function(req, res) {
 
//   userinfo.find().then((userinfo) => {
//       res.json(userinfo)
//   }).catch(err => {
//       if (err) {
//           throw err;
//       }
//   })

// })




//     /**
//      * @swagger
//      * /userinfo/{id}:
//      *   delete:
//      *     parameters:
//      *      - in: path
//      *        name: id
//      *        type: string
//      *     description: Train deleted
//      *     responses:
//      *       200:
//      *         description: Returns the requested admin
//      */
// app.delete('/userinfo/:id', function(req, res) {
//   userinfo.findByIdAndDelete(req.params.id).then(() => {
//       res.send('User deleted')

//   }).catch(err => {
//       if (err) {
//           res.sendStatus(404);
//       }
//   })

// })








// //axios
// app.get('/users', (req, res, next) => {
//   axios.get("http://localhost:1002/userinfo").then((response) => {
//       var users = response.data;
//       res.send(users);

//   });
// });


// app.post("/postuser", (req, res) => {
//   axios.post("http://localhost:1002/adduserinfo", {
//       FirstName: "dada",
//       LastName: "dasda",
//       Address: "dadad",
//       PhoneNo: 4234232453
//   }).then((response) => {
//       var user1 = response.data;
//       res.send(user1);
//   }).catch((err) => {
//       console.log(err.message);
//   })
// })

