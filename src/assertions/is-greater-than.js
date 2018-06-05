import isNumber from "./is-number";

/**
 * Throws a RangeError if a is not greater than b
 * @param  {number} a
 * @param  {number} b
 */
function isGreaterThan(a, b) {
  isNumber(a);
  isNumber(b);

  if (a <= b) {
    throw new RangeError(`${a} is not greater than ${b}`);
  }
}

export default isGreaterThan;
