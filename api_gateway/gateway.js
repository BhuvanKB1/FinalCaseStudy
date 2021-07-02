const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const axios = require('axios');
api.use(bodyParser.json());





//get User
api.get('/signup', (req, res) => {
    axios.get('http://localhost:1000/signup', req.body).then((response) => {
        res.send(response.data);
    })
})

//get login
api.get('/login', (req, res) => {
    axios.get('http://localhost:1000/login', req.body).then((response) => {
        res.send(response.data);
    })
})

//get train
api.get('/trainlist', (req, res) => {
    axios.get('http://localhost:1001/trainlist', req.body).then((response) => {
        res.send(response.data);
    })
})

//get userdata
api.get('/userinfo', (req, res) => {
    axios.get('http://localhost:1002/userinfo', req.body).then((response) => {
        res.send(response.data);
    })
})


api.listen(5000);