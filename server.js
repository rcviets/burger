//Dependencies
let express = require('express');
//Create Port
let PORT = process.env.PORT || 3000;

let app = express();

//Static Content
app.use(express.static('public'));

//Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars
let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Import Routes
let routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, function() {
    console.log('App Listening on Port: ' + PORT);
});