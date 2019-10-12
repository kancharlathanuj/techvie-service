const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require("morgan");
const app = express();
var cors = require('cors');
const appRoute =  require('./Routes/postRoutes');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
var Router = express.Router();
//app.use(authentication)
app.use('/api',Router);

//app Routes 
appRoute.init(Router);

mongoose.Promise = global.Promise;

app.listen(process.env.PORT|| 4000,function(){
    console.log("Listening to port 4000 ");
});