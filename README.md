# random-passwd [![NPM Version][npm-image]][npm-url]

Generate a cryptographically strong random password string

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

[npm-image]: https://img.shields.io/npm/v/random-passwd.svg
[npm-url]: https://npmjs.org/package/random-passwd
