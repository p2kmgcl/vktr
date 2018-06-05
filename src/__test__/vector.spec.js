import Vector from "../vector";

describe("Vector", () => {
  describe("constructor()", () => {
    it("allows an arbitrary number of components", () => {
      const a = new Vector(1);
      const b = new Vector(1, 2, 3);

      expect(a).toMatchSnapshot();
      expect(b).toMatchSnapshot();
    });

    it("fails for zero components", () => {
      expect(() => new Vector()).toThrow(RangeError);
    });

    it("requires each component to be a number", () => {
      expect(() => new Vector("a")).toThrow(TypeError);
      expect(() => new Vector(1, null)).toThrow(TypeError);
      expect(() => new Vector(undefined, 2)).toThrow(TypeError);
      expect(() => new Vector(NaN)).toThrow(TypeError);
    });

    it("does not allow modifying components", () => {
      const a = new Vector(1, 2, 3);

      expect(Object.isFrozen(a.components)).toBe(true);
    });
  });

  describe("get dimensions()", () => {
    it("returns the number of dimensions", () => {
      const a = new Vector(1);
      const b = new Vector(1, 2, 3);

      expect(a.dimensions).toBe(1);
      expect(b.dimensions).toBe(3);
    });
  });

  describe("get coordinate()", () => {
    it("returns the first four coordinates of a vector", () => {
      const a = new Vector(1, 2, 3, 4);

      expect(a.x === a.components[0]).toBe(true);
      expect(a.y === a.components[1]).toBe(true);
      expect(a.z === a.components[2]).toBe(true);
      expect(a.t === a.components[3]).toBe(true);
    });
  });
});
