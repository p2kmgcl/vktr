/**
 * Throws a TypeError if a is not a function
 * @param {function} a
 */
function isFunction(a) {
  if (typeof a !== "function") {
    throw new TypeError(`${a} is not a function`);
  }
}

export default isFunction;
