import { fuelFromMass, calculateLaunchMass } from "./part-1";

describe("AOC day-1 part-1", () => {
  describe("fuelFromMass()", () => {
    it("returns the expected values", () => {
      expect(fuelFromMass(12)).toBe(2);
      expect(fuelFromMass(14)).toBe(2);
      expect(fuelFromMass(1969)).toBe(654);
      expect(fuelFromMass(100756)).toBe(33583);
    });
  });

  describe("calculateLaunchMass()", () => {
    it("returns the expected value", () => {
      expect(calculateLaunchMass()).toBe(3452245);
    });
  });
});
