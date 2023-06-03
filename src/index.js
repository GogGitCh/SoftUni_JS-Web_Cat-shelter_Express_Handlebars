const express = require('express');
const expressCofigurator = require('./config/expressConfig');
const handlebarsCofigurator = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig')
const router = require('./routes');
const app = express();
const PORT = 5000;

//Setting up Handlebars
handlebarsCofigurator(app)

//Setting up server whith express
expressCofigurator(app)

//Connectiong to DB
dbConnect()

app.use(router)

app.listen(PORT, ()=>{
    console.log(`------------------------------------------------------------------- Server listening on port: ${PORT} ------------------------------------------------------------------`);
    console.log(``);
})


