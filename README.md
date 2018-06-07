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

Creates a n-dimensional `Vector` object which can be used for calculations.
Every component can be accessed inside the **readonly** `components` property,
which is an array of numbers.

For physics related access  to components, **some shortcuts have been added** to
this structure. For example, for this vector:

```js
const v = new Vector(1, 2, 3, 4, 5);
```

You can access the first four properties as `x`, `y`, `z` and `t`.  Rest of
**components can still be accessed using the components array property**, so
for the first four and the following components, this code still works:

```js
v.x;                // 1
v.y;                // 2
v.z;                // 3
v.t;                // 4

v.components[0];    // 1
v.components[1];    // 2
v.components[2];    // 3
v.components[3];    // 4
v.components[4];    // 5
```

There is also a `dimensions` property which keeps the number of dimensions
used inside a vector. **This is equivalent to read the length of `dimensions`
array**.

### Math functions

As **`Vector`s are not mutable**, every math function applied to them produces
a new `Vector` instead of modifying the existing. This results in an predictable
easy-to-test environment. Each function has complete documentation about the
expected data and result:

- [`add(Vector, Vector) → Vector`](/src/add.js)
- [`divide(Vector, number) → Vector`](/src/divide.js)
- [`map(Vector, function) → Vector`](/src/map.js)
- [`multiply(Vector, number) → Vector`](/src/multiply.js)
- [`substract(Vector, Vector) → Vector`](/src/substract.js)
