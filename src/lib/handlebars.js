const exphbs = require('express-handlebars');
const path = require('path');

// Configuración del motor de plantillas
const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    extname: '.hbs'
});



// Exportar tanto el motor de plantillas como los helpers
module.exports = hbs;


