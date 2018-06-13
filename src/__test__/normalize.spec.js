import normalize from "../normalize";
import Vector from "../vector";

const EPSILON = Math.pow(2, -52);

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

  it("works for n-dimensional vectors", () => {
    const hasLength1 = (...components) => {
      const length = normalize(new Vector(...components)).length;
      expect(1 - length <= EPSILON).toBe(true);
    };

    hasLength1(12);
    hasLength1(-4, 8);
    hasLength1(0, 43, -2);
    hasLength1(-23.1, 14.44, 1, 0);
    hasLength1(Math.PI, -Math.E, 0, 0, 1, 1);
  });

  it("preserves old vectors angle", () => {
    const v = new Vector(16, 32);
    expect(normalize(v).angle).toBe(v.angle);
  });
});
