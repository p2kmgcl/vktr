import Vector from "../vector";

describe("Vector", () => {
  describe("constructor()", () => {
    it("allows an arbitrary number of components", () => {
      const a = new Vector(1);
      const b = new Vector(1, 2, 3);

      expect(a.components).toMatchSnapshot();
      expect(b.components).toMatchSnapshot();
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

    it("is frozen", () => {
      const a = new Vector(1, 2, 3);

      expect(Object.isFrozen(a)).toBe(true);
      expect(Object.isFrozen(a.components)).toBe(true);
    });
  });

  describe("get angle()", () => {
    it("only works for 2-dimensional vectors", () => {
      expect(() => new Vector(1).angle).toThrow(RangeError);
      expect(() => new Vector(2, 3, 4).angle).toThrow(RangeError);
      expect(() => new Vector(5, 6, 7, 8).angle).toThrow(RangeError);
    });

    it("returns vectors polar form angle", () => {
      expect(new Vector(1, 0).angle).toBe(0);
      expect(new Vector(1, 1).angle).toBe(Math.PI / 4);
      expect(new Vector(0, 1).angle).toBe(Math.PI / 2);
      expect(new Vector(-1, 1).angle).toBe((3 * Math.PI) / 4);
      expect(new Vector(-1, 0).angle).toBe(Math.PI);
      expect(new Vector(-1, -1).angle).toBe((5 * Math.PI) / 4);
      expect(new Vector(0, -1).angle).toBe((3 * Math.PI) / 2);
      expect(new Vector(1, -1).angle).toBe((7 * Math.PI) / 4);
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

  describe("get magnitude() and length()", () => {
    it("returns the Euclidean length of the vector", () => {
      expect(new Vector(0, 1).magnitude).toMatchSnapshot();
      expect(new Vector(1, 0).length).toMatchSnapshot();
    });

    it("works for n-dimensional vectors", () => {
      expect(new Vector(1).length).toMatchSnapshot();
      expect(new Vector(1, 0, 0).magnitude).toMatchSnapshot();
      expect(new Vector(0, 1, 0).length).toMatchSnapshot();
      expect(new Vector(0, 0, 1).magnitude).toMatchSnapshot();
      expect(new Vector(10, 0, 0, 0).length).toMatchSnapshot();
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
