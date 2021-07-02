const express = require('express');
const mongoose = require('mongoose');
const searchRoutes = require('./routes/searchRoutes')
const morgan = require('morgan');
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require('swagger-jsdoc');


const options = {
	swaggerDefinition: {
		openapi: "3.0.1",
		info: {
			title: "Search API",
			version: "1.0.0",
			description: "A Flight Search API",
		},
		servers: [
			{
				url: "http://localhost:1006",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


app.use(cors());
app.use(morgan("dev"));

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');



// database connection
const dbURI = 'mongodb+srv://Bhuvan:Bhuvan123@cluster0.wor7a.mongodb.net/adminFunctions?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(1006))
  .catch((err) => console.log(err));
console.log('Port 1006');


app.use(searchRoutes);

module.exports ={
app,
searchRoutes
}