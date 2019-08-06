const path = require('path');
const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.set('port', process.env.PORT || 5000)

module.exports = app;