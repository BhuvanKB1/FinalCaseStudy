const express = require('express')
const mongoose = require('mongoose')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
var cors = require('cors')
const app = express()


//middleware
app.use(cookieParser())
app.use(bodyParser.json())
app.set('view engine', 'ejs')


// enable cors to the server
const corsOpt = {
    origin: process.env.CORS_ALLOW_ORIGIN || '*', 
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
};
app.use(cors(corsOpt)); 
app.options('*', cors(corsOpt)); 


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: "1.0.0",
            title: "Train Boooking System",
            description: "This is built in Node js.",
            contact: {
                name: "Bhuvan"
            }
        },
        servers: [
                {
                    url: "http://localhost:1007",
                }
        ],
    },

    apis: ["./routes/routes.js"]
};

const specs = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


//routes
app.use('/books',routes)

// database connection
const dbURI = 'mongodb+srv://Bhuvan:Bhuvan123@cluster0.wor7a.mongodb.net/trainBooking?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(1007))
  .catch((err) => console.log(err));
console.log('Port 1007');




module.exports = app