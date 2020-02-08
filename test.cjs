'use strict';

const t = require('libtap');

const randomPasswd = require('./lib.cjs');

const requireNumberError = new TypeError('The argument must be a whole number if provided');
const badRangeError = new RangeError('The argument must be >= 6 && <= 256 if provided');

t.type(randomPasswd, 'function');

t.test('errors', t => Promise.all([
	t.rejects(randomPasswd('bad'), requireNumberError),
	t.rejects(randomPasswd(10.5), requireNumberError),
	t.rejects(randomPasswd(5), badRangeError),
	t.rejects(randomPasswd(257), badRangeError)
]));

t.test('success', async t => {
	const results = await Promise.all([
		randomPasswd(),
		randomPasswd(6),
		randomPasswd(8),
		randomPasswd(16),
		randomPasswd(32),
		randomPasswd(64),
		randomPasswd(128),
		randomPasswd(256)
	]);
	const expectedLengths = [86, 8, 11, 22, 43, 86, 171, 342];

	t.equal(results.length, expectedLengths.length);
	results.forEach((v, idx) => {
		t.equal(typeof v, 'string', `${idx} is string`);
		t.equal(v.length, expectedLengths[idx], `${idx} is ${expectedLengths[idx]} bytes long`);
	});
});
