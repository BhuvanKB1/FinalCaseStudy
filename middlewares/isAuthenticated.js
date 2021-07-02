const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const isAuthenticated= (req,res,next) => {
        // console.log("coo",req.cookies);
        const token = req.cookies.jwt;

    //check token web exit 
    if(token){
        jwt.verify(token,'bhuvan', (err,decodedData) => {
            if(err){
                res.status(401).json({ message: "Unauthorized client" }); 
            }
            else{
                req.userId = decodedData.id;
                req.userType=decodedData.userType;               
                next()
            }
        })
    }
    else{
        // res.status(401).json({ message: "Unauthorized client" }); 
        res.status(205).json({ message: "Please login" })
    }
    
    
}

module.exports = isAuthenticated

