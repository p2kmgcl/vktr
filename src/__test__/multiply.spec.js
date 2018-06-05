import multiply from "../multiply";
import Vector from "../vector";

describe("multiply()", () => {
  it("multiplies every component by a number", () => {
    const a = new Vector(0, 1, 0, -2);

    expect(multiply(a, -4)).toMatchSnapshot();
  });

  it("requires a number parameter", () => {
    const a = new Vector(1);

    expect(() => multiply(a, null)).toThrow(TypeError);
    expect(() => multiply(a, "a")).toThrow(TypeError);
    expect(() => multiply(a, [1])).toThrow(TypeError);
    expect(() => multiply(a, NaN)).toThrow(TypeError);
  });
});
