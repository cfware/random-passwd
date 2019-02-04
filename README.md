# random-passwd

[![Travis CI][travis-image]][travis-url]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Generate a cryptographically strong random password string

### Install random-passwd

This module requires node.js 6 or above.

```sh
npm i -g random-passwd
```

## Usage

```sh
random-passwd [random-bytes]
```

`random-bytes` defaults to 64 if not provided.  random-bytes must be a whole number
between 6 and 256 inclusive.

Random bytes|Password Length|Bits|Combinations
-|-|-|-
6|8|48|2.8e+14
8|11|64|1.8e+19
16|22|128|3.4e+38
32|43|256|1.2e+77
64|86|512|1.3e+154
128|171|1024|1.8e+308
256|342|2048|3.2e+616

If someone knows that you generated a default password with this utility it would
take an average of 6.7e+153 attempts to find your password by brute force (half of
1.3e+154).

## Running tests

Tests are provided by xo and ava.

```sh
npm install
npm test
```

[npm-image]: https://img.shields.io/npm/v/random-passwd.svg
[npm-url]: https://npmjs.org/package/random-passwd
[travis-image]: https://travis-ci.org/cfware/random-passwd.svg?branch=master
[travis-url]: https://travis-ci.org/cfware/random-passwd
[gk-image]: https://badges.greenkeeper.io/cfware/random-passwd.svg
[downloads-image]: https://img.shields.io/npm/dm/random-passwd.svg
[downloads-url]: https://npmjs.org/package/random-passwd
[license-image]: https://img.shields.io/npm/l/random-passwd.svg
