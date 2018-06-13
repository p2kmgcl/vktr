import isGreaterThan from "./assertions/is-greater-than";
import isVector from "./assertions/is-vector";
import map from "./map";

/**
 * Returns a normalized version of vector a, with the same angle
 * but magnitude/length 1. a needs to have a length greater than zero.
 * @param {Vector} a
 */
function normalize(a) {
  isVector(a);
  isGreaterThan(a.length, 0);

  return map(a, component => component / a.length);
}

export default normalize;
