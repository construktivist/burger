var orm = require('../config/orm.js');

var burger = {
	all: function (callback) {
		orm.all('burgers', function (result) {
			callback(result);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, callback) {
		orm.create('burgers', cols, vals, function (result) {
			callback(result);
		});
	},
	update: function (objColVals, condition, callback) {
		orm.update('burgers', objColVals, condition, function (result) {
			cb(result);
		});
	}
};

module.exports = burger;