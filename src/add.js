import haveSameNumberOfDimensions from "./assertions/have-same-number-of-dimensions";
import isVector from "./assertions/is-vector";
import map from "./map";

/**
 * Returns a new vector result of (a + b)
 * @param {Vector} a
 * @param {Vector} b
 * @return {Vector}
 */
function add(a, b) {
  isVector(a);
  isVector(b);
  haveSameNumberOfDimensions(a, b);

  return map(a, (component, index) => component + b.components[index]);
}

export default add;
