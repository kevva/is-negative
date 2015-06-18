'use strict';
var test = require('ava');
var isNegative = require('./');

test(function (t) {
	t.assert(isNegative(-1));
	t.assert(!isNegative(0));
	t.assert(!isNegative(1));
	t.end();
});

test('throws if input isn\'t a number', function (t) {
	t.plan(2);

	try {
		isNegative('foo');
		t.fail();
	} catch (err) {
		t.assert(err);
		t.assert(err.message === 'Expected a number');
	}
});
