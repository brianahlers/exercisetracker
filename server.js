require('dotenv').config(); // import dotenv package
const express = require('express'); // import express
const sequelize = require('./config/connection');//Import connection object for sequelize
const mysql = require('mysql'); // import mysql  ////this is supposed to say 'mysql2' but im not sure we need this here 
const routes = require('./routes'); // import routes


//Import Models to sync them with the database


const app = express();  // create express app   
const PORT = process.env.PORT || 3001; // set port to what we have in the .env file or 3001

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);



// create connection to database
const connection = mysql.createConnection({
    
});

console.log('test')