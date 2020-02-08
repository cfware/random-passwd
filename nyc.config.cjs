'use strict';

module.exports = require('@cfware/nyc')
	.exclude('random-passwd.cjs')
	.fullCoverage();
