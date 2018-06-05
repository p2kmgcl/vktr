import Vector from "../vector";

/**
 * Throws a TypeError if the given argument is not a Vector
 * @param {Vector} a
 */
function isVector(a) {
  if (!(a instanceof Vector)) {
    throw new TypeError(`${a} is not a vector`);
  }
}

export default isVector;
