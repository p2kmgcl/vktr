/**
 * Throws a TypeError if a is not a number
 * @param {number} a
 */
function isNumber(a) {
  if (typeof a !== "number" || isNaN(a)) {
    throw new TypeError(`${a} is not a number`);
  }
}

export default isNumber;
