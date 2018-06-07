import divide from "../divide";
import Vector from "../vector";

describe("divide()", () => {
  it("divides every component by a number", () => {
    const a = new Vector(0, 1, 0, -2);

    expect(divide(a, -4)).toMatchSnapshot();
  });

  it("requires a vector parameter", () => {
    expect(() => divide(null)).toThrow(TypeError);
    expect(() => divide("a")).toThrow(TypeError);
    expect(() => divide([1])).toThrow(TypeError);
    expect(() => divide(NaN)).toThrow(TypeError);
  });

  it("requires a number parameter", () => {
    const a = new Vector(1);

    expect(() => divide(a, null)).toThrow(TypeError);
    expect(() => divide(a, "a")).toThrow(TypeError);
    expect(() => divide(a, [1])).toThrow(TypeError);
    expect(() => divide(a, NaN)).toThrow(TypeError);
  });

  it("requires a non-zero number", () => {
    const a = new Vector(1);

    expect(() => divide(a, 0)).toThrow(RangeError);
  });
});
