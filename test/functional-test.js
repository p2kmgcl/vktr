/* global vktr */

function test() {
  const { add, map, multiply, substract, Vector } = vktr;

  const a = new Vector(1);
  const b = new Vector(2);

  const _add = add(a, b);
  const _map = map(a, value => value * 2);
  const _multiply = multiply(a, 3);
  const _substract = substract(a, b);

  if (
    _add.x !== 3 ||
    _map.x !== 2 ||
    _multiply.x !== 3 ||
    _substract.x !== -1
  ) {
    throw new Error("Functional test failed");
  }
}

module.exports = test;
