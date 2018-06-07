import haveSameNumberOfDimensions from "./assertions/have-same-number-of-dimensions";
import isVector from "./assertions/is-vector";

function dotProduct(a, b) {
  isVector(a);
  isVector(b);
  haveSameNumberOfDimensions(a, b);

  return a.components
    .map((component, index) => component * b.components[index])
    .reduce((a, b) => a + b, 0);
}

export default dotProduct;
