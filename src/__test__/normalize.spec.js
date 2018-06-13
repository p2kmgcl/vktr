import normalize from "../normalize";
import Vector from "../vector";

describe("normalize()", () => {
  it("needs a Vector", () => {
    expect(() => normalize(null)).toThrow(TypeError);
    expect(() => normalize(1)).toThrow(TypeError);
    expect(() => normalize(undefined)).toThrow(TypeError);
  });

  it("needs the vector to have a length greater than 0", () => {
    expect(() => normalize(new Vector(0))).toThrow(RangeError);
    expect(() => normalize(new Vector(0, 0, 0))).toThrow(RangeError);
  });

  it("returns a new vector with length 1", () => {
    expect(normalize(new Vector(10, 0)).length).toBe(1);
  });

  it("preserves old vectors angle", () => {
    const v = new Vector(16, 32, 1);

    expect(normalize(v).angle).toBe(v.angle);
  });
});
