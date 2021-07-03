const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jsonwebtoken = require('jsonwebtoken')
const isAuthenticated = require('../../middlewares/isAuthenticated');
const api = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const axios = require('axios');
api.use(bodyParser.json());

api.post("/signup", (req, res) => {
    axios.post("http://localhost:1000/signup", req.body).then((response) => {
        console.log(response.data);
        var train = response.data;
        res.send(train);
    }).catch((err) => {
        console.log(err.message);
    })
})

api.post("/login", (req, res) => {
    axios.post("http://localhost:1000/login", req.body).then((response) => {
        console.log(response.data);
        var train = response.data;
        res.send(train);
    }).catch((err) => {
        console.log(err.message);
    })
})


api.get('/logout', (req, res) => {
    axios.get('http://localhost:1000/logout', req.body).then((response) => {
        res.send(response.data);
    })
})

///////Auth///////





//get service
api.get('/train', (req, res) => {
    axios.get('http://localhost:1001/train', req.body).then((response) => {
        res.send(response.data);
    })
})


//get promo
api.get('/train/:id', (req, res) => {
        axios.get('http://localhost:1001/train/'+req.params.id).then((response)=>{
        res.send(response.data);    
        res.status(200);
        })
    }
)

api.post("/train", isAuthenticated, (req, res) => {
    axios.post("http://localhost:1001/train", req.body).then((response) => {
        console.log(response.data);
        var train = response.data;
        res.send(train);
    }).catch((err) => {
        console.log(err.message);
    })
})

api.patch("/train/:id", isAuthenticated, (req, res)=>{
    axios.patch('http://localhost:1001/train/'+req.params.id, req.body).then((response)=>{
        res.status(200).send({message: `Update Success `});
    })


})

api.delete("/train/:id", isAuthenticated ,(req,res)=>{
    const id = req.params.id;
    axios.delete('http://localhost:1001/train/'+id).then((response)=>{
        res.send(`Train deleted`);
    })

})



api.patch("/updateTrainseat/:id", isAuthenticated, (req, res)=>{
    axios.patch('http://localhost:1001/updateTrainseat/'+req.params.id, req.body).then((response)=>{
        res.status(200).send({message: `Update Success `});
    })


})

////admin//////

api.post("/addBook", isAuthenticated, (req, res) => {
    axios.post("http://localhost:1007/addBook", req.body).then((response) => {
        console.log(response.data);
        var train = response.data;
        res.send(train);
    }).catch((err) => {
        console.log(err.message);
    })
})

api.delete("/delBook/:id", isAuthenticated, (req,res)=>{
    const id = req.params.id;
    axios.delete('http://localhost:1007/delBook/'+id).then((response)=>{
        res.send(`Train deleted`);
    })

})

api.get('/viewBook', isAuthenticated, (req, res) => {
    axios.get('http://localhost:1007/viewBook', req.body).then((response) => {
        res.send(response.data);
    })
})

///book/////

api.get('/train/search', (req, res) => {
    axios.get('http://localhost:1006/train/search', req.body).then((response) => {
        res.send(response.data);
    })
})

/////search////

api.get('/usertrain', (req, res) => {
    axios.get('http://localhost:1002/trainlist', req.body).then((response) => {
        res.send(response.data);
    })
})

api.get('/usertrain/:id', (req, res) => {
    axios.get('http://localhost:1002/trainlist/'+req.params.id).then((response)=>{
    res.send(response.data);    
    res.status(200);
    })
}
)

api.post("/userinfo", (req, res) => {
    axios.post("http://localhost:1002/userinfo", req.body).then((response) => {
        console.log(response.data);
        var train = response.data;
        res.send(train);
    }).catch((err) => {
        console.log(err.message);
    })
})

api.get('/userinfo', (req, res) => {
    axios.get('http://localhost:1002/userinfo', req.body).then((response) => {
        res.send(response.data);
    })
})

api.patch("/userinfo/:id",(req, res)=>{
    axios.patch('http://localhost:1002/userinfo/'+req.params.id, req.body).then((response)=>{
        res.status(200).send({message: `Update Success `});
    })


})


api.listen(3000);