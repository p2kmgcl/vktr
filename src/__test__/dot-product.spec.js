import dotProduct from "../dot-product";
import Vector from "../vector";

describe("dotProduct()", () => {
  it("returns the dot product of two vectors", () => {
    const a = new Vector(1, 1);
    const b = new Vector(-1, -1);

    expect(dotProduct(a, b)).toMatchSnapshot();
  });

  it("require them to have same number of dimensions", () => {
    expect(() => {
      dotProduct(new Vector(1, 2, 3), new Vector(3, 4));
    }).toThrow(RangeError);
  });

  it("is commutative", () => {
    const a = new Vector(1, 1);
    const b = new Vector(-1, -1);

    expect(dotProduct(a, b)).toEqual(dotProduct(b, a));
  });

  it("works for n-dimensional vectors", () => {
    const a = new Vector(1, 1, 3, 7, 13);
    const b = new Vector(-1, -1, 0, 25, 1);

    expect(dotProduct(a, b)).toMatchSnapshot();
  });
});
