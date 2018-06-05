import isFunction from "./assertions/is-function";
import isVector from "./assertions/is-vector";
import Vector from "./vector";

/**
 * Returns a new vector result of applying the
 * given function to each component of the given vector.
 * @param {Vector} a
 * @param {Function} fn
 * @return {Vector}
 */
function map(a, fn) {
  isFunction(fn);
  isVector(a);

  return new Vector(...a.components.map(fn));
}

export default map;
