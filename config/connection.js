//MySQL Connection Information
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Plzgtfok!',
    database: 'burgers_db'
});

//Make Connection
connection.connect(function(err) {
    if (err) {
        console.log('Error Connecting: ' + err.stack);
        return;
    }
    console.log('Connected as ID: ' + connection.threadId);
});

//Export Connection
module.exports = connection;