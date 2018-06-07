/**
 * Throws a RangeError if a is equal to b
 * @param  {number} a
 * @param  {number} b
 */
function isNotEqualTo(a, b) {
  if (a === b) {
    throw new RangeError(`${a} is equal to ${b}`);
  }
}

export default isNotEqualTo;
