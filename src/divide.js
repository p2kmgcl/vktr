import isNotEqualTo from "./assertions/is-not-equal-to";
import isNumber from "./assertions/is-number";
import isVector from "./assertions/is-vector";
import map from "./map";

/**
 * Returns a new Vector result of (a / scalar)
 * @param {Vector} a
 * @param {number} scalar
 * @return {Vector}
 */
function divide(a, scalar) {
  isVector(a);
  isNumber(scalar);
  isNotEqualTo(scalar, 0);

  return map(a, component => component / scalar);
}

export default divide;
