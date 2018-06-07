# vktr

[![Package version](http://img.shields.io/npm/v/vktr.svg)](https://www.npmjs.org/package/redux-scalable)
[![Build status](https://travis-ci.org/p2kmgcl/vktr.svg?branch=master)](https://travis-ci.org/p2kmgcl/vktr)
[![Coverage status](https://coveralls.io/repos/github/p2kmgcl/vktr/badge.svg?branch=master)](https://coveralls.io/github/p2kmgcl/vktr?branch=master)
[![Dependencies status](https://david-dm.org/p2kmgcl/vktr/status.svg)](https://david-dm.org/p2kmgcl/vktr)
[![Development dependencies status](https://david-dm.org/p2kmgcl/vktr/dev-status.svg)](https://david-dm.org/p2kmgcl/vktr?type=dev)

Tiny, immutable and fast n-dimensional vector with pure functional calculations

## Install

- **NPM**: `npm install vktr`
- **Yarn**: `yarn add vktr`

## Usage

### Browser

```html
<script src="vktr.js"></script>
<script>
  const { multiply, Vector } = vktr;

  const a = new Vector(1, 2, 3);
  const b = 2;

  multiply(a, b); // [2, 4, 6]
</script>
```

### NodeJS

```js
const { add, Vector } = require('vktr');

const a = new Vector(1, 2, 3);
const b = new Vector(3, 2, 1);

add(a, b); // [4, 4, 4]
```

### ES6+

```js
import { substract, Vector } from 'vktr';

const a = new Vector(1, 2, 3);
const b = new Vector(3, 2, 1);

substract(a, b); // [-2, 0, 2]
```

### ES6+ with individual imports

```js
import map from 'vktr/src/map';
import Vector from 'vktr/src/vector';

const a = new Vector(4, 5, 6);
const fn = (component) => component * 2;

map(a, fn); // [8, 10, 12]
```

## Overview

### `new Vector(...number)`

Creates a n-dimensional `Vector` object which can be used for calculations. A
Vector **has an arbitrary number of components**, which has to be greater than
zero.

Once a vector is created, it's components cannot be modified without
producing a new Vector. This effect is call [immutability](https://en.wikipedia.org/wiki/Immutable_object), which causes predictable and
efficient code.

However, there are some computed properties that are not calculated until you
try to access them. Appart from this properties, the only way of making
calculations is producing new Vectors.

### Computed properties

- `dimensions: number`: number of dimensions of the vector.
- `length: number`: Euclidean length of the the vector.

<span></span>

- `x: number`: Returns the first component of the vector, if any.
- `y: number`: Returns the second component of the vector, if any.
- `z: number`: Returns the third component of the vector, if any.
- `t: number`: Returns the fourth component of the vector, if any.

### Math functions

As **`Vector`s are not mutable**, every math function applied to them produces
a new `Vector` instead of modifying the existing. This results in an predictable
easy-to-test environment. Each function has complete documentation about the
expected data and result:

- [`add(Vector, Vector) → Vector`](/src/add.js)
- [`divide(Vector, number) → Vector`](/src/divide.js)
- [`dotProduct(Vector, Vector) → number`](/src/dot-product.js)
- [`map(Vector, function) → Vector`](/src/map.js)
- [`multiply(Vector, number) → Vector`](/src/multiply.js)
- [`substract(Vector, Vector) → Vector`](/src/substract.js)
