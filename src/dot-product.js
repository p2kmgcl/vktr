import haveSameNumberOfDimensions from "./assertions/have-same-number-of-dimensions";
import isVector from "./assertions/is-vector";

/**
 * Calculates the dot product of two vectors
 * @param {Vector} a
 * @param {Vector} b
 * @return {number}
 * @see https://en.wikipedia.org/wiki/Dot_product
 */
function dotProduct(a, b) {
  isVector(a);
  isVector(b);
  haveSameNumberOfDimensions(a, b);

  return a.components
    .map((component, index) => component * b.components[index])
    .reduce((a, b) => a + b, 0);
}

export default dotProduct;
