var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (request, result) {
	res.redirect('/burger');
});

router.get('/burger', function (request, result) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function (request, result) {
	burger.create(['name'], [req.body.name], function () {
		res.redirect('/burger');
	});
});

router.put('/burger/update/:devoured', function (request, result) {
	var condition = 'devoured = ' + req.params.devoured;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burger');
	});
});

module.exports = router;
