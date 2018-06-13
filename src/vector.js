/* global WeakMap */

import isEqualTo from "./assertions/is-equal-to";
import isGreaterThan from "./assertions/is-greater-than";
import isNumber from "./assertions/is-number";

const privateProperties = new WeakMap();

/**
 * n-dimensional vector
 * @property {Array<number>} components
 */
class Vector {
  /**
   * Creates a new Vector
   * @param {...number} components
   * @return {Vector}
   */
  constructor(...components) {
    isGreaterThan(components.length, 0);
    components.forEach(component => isNumber(component));

    Object.freeze(this);

    privateProperties.set(this, {
      components: Object.freeze([...components])
    });
  }

  /**
   * Returns the polar form's angle of the vector in radians.
   * It's only valid for 2-dimensional vectors, otherwise
   * it will throw a RangeError.
   * @return {number}
   */
  get angle() {
    isEqualTo(this.dimensions, 2);

    let deltaRotation = 0;

    if (this.x < 0) {
      if (this.y <= 0) {
        deltaRotation += Math.PI;
      } else {
        deltaRotation += Math.PI / 2;
      }
    } else if (this.y < 0) {
      if (this.x === 0) {
        deltaRotation += Math.PI;
      } else {
        deltaRotation += (3 * Math.PI) / 2;
      }
    }

    return Math.atan(Math.abs(this.y) / Math.abs(this.x)) + deltaRotation;
  }

  /**
   * Return the list of components of the vector
   * @return {Array<number>}
   */
  get components() {
    const props = privateProperties.get(this);

    return props.components;
  }

  /**
   * Return number of components of vector
   * @return {number}
   */
  get dimensions() {
    return this.components.length;
  }

  /**
   * Returns the Euclidean length of the vector
   * @return {number}
   * @see https://en.wikipedia.org/wiki/Euclidean_vector#Length
   */
  get length() {
    return Math.sqrt(
      this.components
        .map(component => component ** 2)
        .reduce((a, b) => a + b, 0)
    );
  }

  /**
   * Returns the magnitude of the vector (alias for length)
   * @return {number}
   * @see Vector.length
   */
  get magnitude() {
    return this.length;
  }

  /**
   * Returns a string representation of the Vector
   * @return {string}
   */
  toString() {
    return `[${this.components.join(", ")}]`;
  }

  /**
   * Gets the first coordinate of the vector
   * @return {number|undefined}
   */
  get x() {
    return this.components[0];
  }

  /**
   * Gets the second coordinate of the vector
   * @return {number|undefined}
   */
  get y() {
    return this.components[1];
  }

  /**
   * Gets the third coordinate of the vector
   * @return {number|undefined}
   */
  get z() {
    return this.components[2];
  }

  /**
   * Gets the fourth coordinate of the vector
   * @return {number|undefined}
   */
  get t() {
    return this.components[3];
  }
}

export default Vector;
