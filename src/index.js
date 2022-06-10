const express = require('express');
const { initializeDatabase } = require('./config/dataBase')
const routers = require('./routes');
const cookieParser = require('cookie-parser');
const handlebars = require('./config/handlebars');

const app = express();
handlebars(app)

app.use('/static', express.static('public'));
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(routers);

initializeDatabase()
    .then(() => {
        app.listen(5000, () => console.log(`App is listening on port 5000`));
    })
    .catch((err) => {
        console.log('Cannot connect to db', err);
    })


