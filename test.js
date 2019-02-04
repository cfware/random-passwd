import test from 'ava';

import randomPasswd from './lib';

const requireNumberError = {
	instanceOf: TypeError,
	message: 'The argument must be a whole number if provided'
};
const badRangeError = {
	instanceOf: RangeError,
	message: 'The argument must be >= 6 && <= 256 if provided'
};

test('is function', t => {
	t.is(typeof randomPasswd, 'function');
});

test('errors', t => {
	return Promise.all([
		t.throwsAsync(randomPasswd('bad'), requireNumberError),
		t.throwsAsync(randomPasswd(10.5), requireNumberError),
		t.throwsAsync(randomPasswd(5), badRangeError),
		t.throwsAsync(randomPasswd(257), badRangeError)
	]);
});

test('success', async t => {
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

	t.is(results.length, expectedLengths.length);
	results.forEach((v, idx) => {
		t.is(typeof v, 'string', `${idx} is string`);
		t.is(v.length, expectedLengths[idx], `${idx} is ${expectedLengths[idx]} bytes long`);
	});
});
