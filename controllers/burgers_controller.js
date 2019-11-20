//Dependencies
var express = require('express');

var router = express.Router();

//Import Model
var burger = require('../models/burger.js');

//Create Routes
router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

//Export Routes
module.exports = router;