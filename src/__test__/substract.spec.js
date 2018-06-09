import substract from "../substract";
import Vector from "../vector";

describe("substract()", () => {
  it("allows substracting two vectors", () => {
    const a = new Vector(1);
    const b = new Vector(2);

    expect(substract(a, b).components).toMatchSnapshot();
  });

  it("requires vector parameter", () => {
    const a = new Vector(1);

    expect(() => substract(a, 1)).toThrow(TypeError);
  });

  it("requires same number of dimensions", () => {
    const a = new Vector(1);
    const b = new Vector(1, 2);

    expect(() => substract(a, b)).toThrow(RangeError);
  });
});
