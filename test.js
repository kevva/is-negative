'use strict';
var test = require('ava');
var isNegative = require('./');

test(function (t) {
	t.assert(isNegative(-1));
	t.assert(!isNegative(0));
	t.assert(!isNegative(1));
	t.end();
});
