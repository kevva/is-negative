# is-negative [![Build Status](https://travis-ci.org/kevva/is-negative.svg?branch=master)](https://travis-ci.org/kevva/is-negative)

> Test if a number is negative


## Install

```
$ npm install --save is-negative
```


## Usage

```js
var isNegative = require('is-negative');

isNegative(-1);
//=> true

isNegative(1);
//=> false

isNegative(0);
//=> false
```

_Note: This module doesn't consider `-0` to be a negative number. If you want to detect `-0`, use the [`negative-zero`](https://github.com/sindresorhus/negative-zero) module._


## License

MIT © [Kevin Martensson](http://github.com/kevva)
