const morgan = require('morgan');
const path = require('path');
const express = require('express');
const exphbs = require('./lib/handlebars.js');

const app = express();


// Configuración del motor de plantillas
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine);
app.set('view engine', '.hbs');

/**middlewares*/




app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 // Agregué la llamada de función '()' que faltaba

/**global variables */
app.use((req, res, next) => {
    
    next();
});


/**routes */
app.use(require('./routes/index.js'));
app.use(require('./routes/autenticacion.js'));
app.use('/links',require('./routes/links.js')); // Corregí la importación

/**public */
app.use(express.static(path.join(__dirname, 'public')));

/**iniciar servidor */

app.listen(3000, () => {
    console.log('server on port: 3000');
});
