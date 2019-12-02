import { calculateMassRecursively, calculateLaunchMass } from "./part-2";

describe("AOC day-1 part-1", () => {
  describe("calculateMassRecursively()", () => {
    it("returns the expected value", () => {
      expect(calculateMassRecursively(14)).toBe(2);
      expect(calculateMassRecursively(1969)).toBe(966);
      expect(calculateMassRecursively(100756)).toBe(50346);
    });
  });

  describe("calculateLaunchMass()", () => {
    it("returns the expected value", () => {
      expect(calculateLaunchMass()).toBe(5175499);
    });
  });
});
