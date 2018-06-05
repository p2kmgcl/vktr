import isNumber from "./assertions/is-number";
import isVector from "./assertions/is-vector";
import map from "./map";

/**
 * Returns a new Vector result of (a * scalar)
 * @param {Vector} a
 * @param {number} scalar
 * @return {Vector}
 */
function multiply(a, scalar) {
  isVector(a);
  isNumber(scalar);

  return map(a, component => component * scalar);
}

export default multiply;
