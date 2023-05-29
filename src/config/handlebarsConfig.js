const exphbs = require('express-handlebars');
const path = require('path')

function handlebarsCofigurator(app) {
    const handlebars = exphbs.create({extname:'.hbs'});
    
    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    app.set('views', 'src/views');
}

module.exports = handlebarsCofigurator;