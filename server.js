//Dependencies
var express = require('express');
//Create Port
var PORT = process.env.PORT || 3000;

var app = express();

//Static Content
app.use(express.static('public'));

//Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Import Routes
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log('App Listenin on Port: ' + PORT);
});