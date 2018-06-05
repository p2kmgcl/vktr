import isVector from "./is-vector";

/**
 * Throws a RangeError if a and b have not the same number of dimensions
 * @param {Vector} a
 * @param {Vector} b
 */
function haveSameNumberOfDimensions(a, b) {
  isVector(a);
  isVector(b);

  if (a.dimensions !== b.dimensions) {
    throw new RangeError(`${a} and ${b} have not same number of dimensions`);
  }
}

export default haveSameNumberOfDimensions;
