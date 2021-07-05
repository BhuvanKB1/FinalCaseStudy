const express = require('express');
const mongoose = require('mongoose');
const controlleradmin = require('./controllers/controller');
const bodyParser = require('body-parser');
const axios = require("axios")
const app = express();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')

const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/middleware');


app.use(express.json());
app.use(cookieParser());
const user = require("./model/User");


app.use(bodyParser.json());

// view engine
app.set('view engine', 'ejs');


// enable cors to the server
const corsOpt = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*', // this work well to configure origin url in the server
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // to works well with web app, OPTIONS is required
  allowedHeaders: ['Content-Type', 'Authorization'] // allow json and token in the headers
};
app.use(cors(corsOpt)); // cors for all the routes of the application
app.options('*', cors(corsOpt)); // automatic cors gen for HTTP verbs in all routes, This can be redundant but I kept to be sure that will always work



// database connection
const dbURI = 'mongodb+srv://Bhuvan:Bhuvan123@cluster0.wor7a.mongodb.net/adminFunctions?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(1002))
  .catch((err) => console.log(err));
console.log('Port 1002');
controlleradmin(app);
module.exports = app;

// Extended: http://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Railway Reservation',
      description: 'Railway Reservation info',
      contact: {
        name: 'Bhuvan KB'
      },
      servers: ["http://localhost:1002"]
      
    }
  },
  apis: ['controllers/controller.js']

};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




