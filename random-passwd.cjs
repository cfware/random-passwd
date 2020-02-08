#!/usr/bin/env node
'use strict';
const randomPasswd = require('./lib.cjs');

randomPasswd(Number(process.argv[2] || 64))
	.then(passwd => console.log(passwd))
	.catch(error => {
		console.error(error.message);
		process.exit(1);
	});
