import { runIntCode, getNextCode } from "./part-1";

describe("AOC day-2 part-1", () => {
  describe("runIntCode()", () => {
    it("returns the expected value", () => {
      /*expect(runIntCode([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]);
      expect(runIntCode([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99]);
      const longOutput = [2, 4, 4, 5, 99, 9801];
      expect(runIntCode([2, 4, 4, 5, 99, 0])).toStrictEqual(longOutput);*/

      const longOutput2 = [30, 1, 1, 4, 2, 5, 6, 0, 99];
      expect(runIntCode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual(
        longOutput2
      );
    });
  });

  describe("()", () => {
    it("returns the expected value", () => {
      //expect(getNextCode()).toBe(5175499);
    });
  });
});
