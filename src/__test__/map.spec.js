import map from "../map";
import Vector from "../vector";

describe("map()", () => {
  it("applies the given function to each component", () => {
    const by2 = jest.fn(a => a * 2);
    const a = new Vector(1, 2, 3);
    const b = map(a, by2);

    expect(b).toMatchSnapshot();
    expect(by2.mock.calls).toMatchSnapshot();
  });

  it("requires a function parameter", () => {
    const a = new Vector(1);

    expect(() => map(a, null)).toThrow(TypeError);
    expect(() => map(a, "a")).toThrow(TypeError);
    expect(() => map(a, [1])).toThrow(TypeError);
    expect(() => map(a, NaN)).toThrow(TypeError);
  });
});
