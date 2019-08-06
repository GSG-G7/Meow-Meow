const path = require('path');
const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

app.engine(
    'hbs',
    exhbs({
        extname:'hbs',
        layoutsDir:path.join(__dirname,'views','layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'main'
    })
)

app.get('/',(req,res)=> {
    res.render('home',{
        appName: 'Cat Photos App'
    })
})


app.set('port', process.env.PORT || 5000)

module.exports = app;