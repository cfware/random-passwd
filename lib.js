'use strict';

const crypto = require('crypto');
const {promisify} = require('util');

const randomBytes = promisify(crypto.randomBytes);

async function randomPasswd(bytes = 64) {
	if (typeof bytes !== 'number' || Math.round(bytes) !== bytes) {
		throw new TypeError('The argument must be a whole number if provided');
	}

	if (bytes < 6 || bytes > 256) {
		throw new RangeError('The argument must be >= 6 && <= 256 if provided');
	}

	return randomBytes(bytes).then(buf => {
		return buf
			.toString('base64')
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/=*$/, ''); // eslint-disable-line no-div-regex
	});
}

module.exports = randomPasswd;
