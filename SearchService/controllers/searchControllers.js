const trains = require('../models/search')

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

module.exports.trains_get = (req,res) => {
    const source = req.query.source;
    const destination = req.query.destination;
    const date = req.query.date;
    if(isEmpty(source) || isEmpty(destination)){
         res.status(400).json({ message: "Query is invalid" });
    }else{
         trains.find({source:{$regex:source ,$options: '$i'}} && {destination:{$regex:destination ,$options: '$i'}} || {date:{$regex:date ,$options: '$i'}})
            .then((data)=>{
                if(isEmpty(data)){
                    res.status(300).send("No Trains are available at this moment");
                }else{
                    res.status(200).send(data)   
                }
            })
            .catch((err)=>{
                res.status(404).send(err);
            })   
    }
}



