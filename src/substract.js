import add from "./add";
import haveSameNumberOfDimensions from "./assertions/have-same-number-of-dimensions";
import isVector from "./assertions/is-vector";
import multiply from "./multiply";

/**
 * Returns a new vector result of (a - b)
 * @param {Vector} a
 * @param {Vector} b
 * @return {Vector}
 */
function substract(a, b) {
  isVector(a);
  isVector(b);
  haveSameNumberOfDimensions(a, b);

  return add(a, multiply(b, -1));
}

export default substract;
