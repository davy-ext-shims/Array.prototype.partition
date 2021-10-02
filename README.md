# Array.prototype.partition

[![type annotation][type-anno-svg]][package-url]
[![npm version][npm-version-svg]][package-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]

An intuitive method, `Array.prototype.partition`, shim/polyfill that works as far down as ES3.

`Array.prototype.partition` will split elements into pair of lists: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [proposal](https://davy-ext-shims.github.io/Array.prototype.partition/).

Because `Array.prototype.partition` depends on a receiver (the "this" value), the main export takes the array to operate on as the first argument.

When using TypeScript and import with `@davy-ext-shims/array.prototype.partition/auto`, global definition will be auto injected.

## Example

```js
var partition = require('@davy-ext-shims/array.prototype.partition')
var assert = require('assert')

assert.deepEqual(
  partition([1, 2, 3, 4], function (x) {
    return x < 3
  }),
  [[1, 2], [3, 4]]
)
assert.deepEqual(
  partition([1, 2, 3, 4], function (x) {
    return x % 2 !== 0
  }),
  [[1, 3], [2, 4]]
)
```

```js
var partition = require('@davy-ext-shims/array.prototype.partition')
var assert = require('assert')
var shimmedPartition = partition.shim()
assert.equal(shimmedPartition, partition.getPolyfill())

var arr = [1, 2, 3, 4]
var isOdd = function (x) {
  return x % 2 !== 0
}
assert.deepEqual(arr.partition(isOdd), partition(arr, isOdd))
```

## Tests

TBD.

[package-url]: https://npmjs.org/package/@davy-ext-shims/array.prototype.partition
[type-anno-svg]: https://img.shields.io/npm/types/@davy-ext-shims/array.prototype.partition.svg
[npm-version-svg]: https://img.shields.io/npm/v/@davy-ext-shims/array.prototype.partition.svg
[deps-svg]: https://david-dm.org/davy-ext-shims/Array.prototype.partition.svg
[deps-url]: https://david-dm.org/davy-ext-shims/Array.prototype.partition
[dev-deps-svg]: https://david-dm.org/davy-ext-shims/Array.prototype.partition/dev-status.svg
[dev-deps-url]: https://david-dm.org/davy-ext-shims/Array.prototype.partition#info=devDependencies
[license-image]: https://img.shields.io/npm/l/@davy-ext-shims/array.prototype.partition.svg
[license-url]: LICENSE
