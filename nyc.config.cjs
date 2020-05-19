'use strict';

module.exports = require('@cfware/nyc')
	.all()
	.exclude('random-passwd.cjs');
