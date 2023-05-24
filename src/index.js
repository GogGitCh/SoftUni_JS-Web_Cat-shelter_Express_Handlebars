const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

//Setting up Handlebars
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({extname:'.hbs'});
app.engine('.hbs',handlebars.engine);
app.set('view engine', '.hbs')

//Setting up server whith express
app.get('/', (req, res) => {
    app.set('views', (path.join(__dirname,'views')))
    console.log((path.join(__dirname,'views')));
    res.render('layouts/main');
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
    console.log(`---------------------------------------------------------------------------------------------------------------------------------------------------------`);
})


