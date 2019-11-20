//Import ORM File
var orm = require('../config/orm.js');

//Functions That Interact With Database
var burgers = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objCol, vals, id, cb) {
        orm.updateOne('burgers', objCol, vals, id, function(res) {
            cb(res);
        });
    }
};

//Export Database Functions
module.exports = burger;