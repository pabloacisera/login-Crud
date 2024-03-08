const exphbs = require('express-handlebars');
const path = require('path');

// Configuración del motor de plantillas
const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    extname: '.hbs'
});

module.exports = hbs;


