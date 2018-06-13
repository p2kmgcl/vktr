/**
 * Throws a RangeError if a is not equal to b
 * @param  {number} a
 * @param  {number} b
 */
function isEqualTo(a, b) {
  if (a !== b) {
    throw new RangeError(`${a} is not equal to ${b}`);
  }
}

export default isEqualTo;
