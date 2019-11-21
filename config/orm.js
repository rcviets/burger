//Import MySQL connection
let connection = require('../config/connection.js');

//ORM Object
let orm = {

    //Select All Function
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });    
    },

    //Create Function
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //Update Function
    updateOne: function(table, cols, val, id, cb) {
        var queryString = "UPDATE ?? SET ?? =? WHERE ID=?";

        connection.query(queryString, [table, cols, val, id], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

//Export ORM
module.exports = orm;