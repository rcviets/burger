//Import ORM File
var orm = require('../config/orm.js');

//Functions That Interact With Database
var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.create('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//Export Database Functions
module.exports = burger;