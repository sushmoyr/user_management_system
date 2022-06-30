const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Parse the body of the request
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());

//set static folder
app.use(express.static('public'));

//set the engine
app.engine('handlebars', handlebars.engine({ extname: '.handlebars' }));
app.set('view engine', 'handlebars');


//make sql connection pool
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//Router
app.get('/', (req, res) => {
    res.render('home');
});



app.listen(port, () => console.log('Server is running at ' + port));