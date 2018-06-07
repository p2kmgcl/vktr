import isGreaterThan from "./assertions/is-greater-than";
import isNumber from "./assertions/is-number";

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

    this.components = Object.freeze([...components]);
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
