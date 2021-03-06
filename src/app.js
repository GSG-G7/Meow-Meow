const path = require('path');
const express = require('express');
const exhbs = require('express-handlebars');
const router = require('./controlers/index');

const app = express();

// eslint-disable-next-line import/no-unresolved
require('dotenv').config();

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);


app.use(router);
app.set('port', process.env.PORT || 5000);

module.exports = app;
