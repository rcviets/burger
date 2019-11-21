//Dependencies
var express = require('express');

var router = express.Router();

//Import Model
var burgers = require('../models/burger.js');

//Create Routes
router.get('/', function(req, res) {
    burgers.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burgers.insertOne(['burger_name'], [req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burgers.updateOne(['devoured'], [req.body.devour], [req.params.id], function(result) {
        
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

//Export Routes
module.exports = router;