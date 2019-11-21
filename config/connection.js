//MySQL Connection Information
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Plzgtf0k!',
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