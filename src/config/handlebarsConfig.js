const exphbs = require('express-handlebars');

function handlebarsCofigurator(app) {
    const handlebars = exphbs.create({extname:'.hbs'});
    
    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    app.set('views', './src/views');
}

module.exports = handlebarsCofigurator;