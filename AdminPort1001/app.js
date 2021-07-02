const express = require('express');
const mongoose = require('mongoose');
const trainsController = require('./controllers/controller');
const trainRoutes = require('./routes/trainRoutes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')


const options = {
	swaggerDefinition: {
		openapi: "3.0.1",
		info: {
			title: "Train Management API",
			version: "1.0.0",
			description: "A Train Management API",
		},
		servers: [
			{
				url: "http://localhost:1001",
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

app.use(cookieParser())
app.use(bodyParser.json())


app.use(express.json());




// database connection
const dbURI = 'mongodb+srv://Bhuvan:Bhuvan123@cluster0.wor7a.mongodb.net/adminFunctions?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(1001))
  .catch((err) => console.log(err));
console.log('Port 1001');


app.use(trainRoutes);


module.exports = { app: app}

module.exports = { trainRoutes: trainRoutes}





