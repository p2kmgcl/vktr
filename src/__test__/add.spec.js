import add from "../add";
import Vector from "../vector";

describe("add()", () => {
  it("allows adding two vectors", () => {
    const a = new Vector(1);
    const b = new Vector(2);

    expect(add(a, b)).toMatchSnapshot();
  });

  it("requires vector parameter", () => {
    const a = new Vector(1);

    expect(() => add(a, 1)).toThrow(TypeError);
  });

  it("requires same number of dimensions", () => {
    const a = new Vector(1);
    const b = new Vector(1, 2);

    expect(() => add(a, b)).toThrow(RangeError);
  });
});
