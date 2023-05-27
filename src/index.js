const express = require('express');
const expressCofigurator = require('./config/expressConfig');
const handlebarsCofigurator = require('./config/handlebarsConfig')
const path = require('path');
const app = express();
const PORT = 5000;

//Setting up Handlebars
handlebarsCofigurator(app)


//Setting up server whith express
expressCofigurator(app)



app.get('/', (req, res) => {
    app.set('views', (path.join(__dirname,'views')));
    res.render('layouts/main');
})

// app.get('/public/styles/site.css', (req, res) => {
//     res.render('styles')

// })

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
    console.log(`---------------------------------------------------------------------------------------------------------------------------------------------------------`);
})


