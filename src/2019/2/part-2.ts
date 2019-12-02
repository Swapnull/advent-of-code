import * as fs from "fs";

const target = 19690720;

const intCode = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split(",")
  .map(Number);

export const getNextCode = (code: number[], index: number) => {
  const [opcode, first, second, write] = code.slice(index);
  const updatedIntCode = code;
  if (opcode === 1) {
    updatedIntCode[write] = updatedIntCode[first] + updatedIntCode[second];
  } else if (opcode === 2) {
    updatedIntCode[write] = updatedIntCode[first] * updatedIntCode[second];
  } else if (opcode === 99) {
    return [];
  } else {
    throw new Error("Incorrect opcode");
  }

  return updatedIntCode;
};

export const runIntCode = (_intCode: number[]) => {
  let updatedIntCode = _intCode;
  for (let i = 0; i <= _intCode.length; i += 4) {
    const res = getNextCode(updatedIntCode, i);
    if (res && res.length) updatedIntCode = res;
    else break;
  }
  return updatedIntCode;
};

const bruteForce = (_intCode: number[]) => {
  const blankArray = Array.from({ length: 100 }, (_, i) => i);
  for (const noun of blankArray) {
    for (const verb of blankArray) {
      const updatedInput = [..._intCode];
      updatedInput[1] = noun;
      updatedInput[2] = verb;
      if (runIntCode(updatedInput)[0] === target) {
        return { noun, verb };
      }
    }
  }
  return { noun: 0, verb: 0 };
};

const runBruteForce = (_intCode: number[]) => {
  const { noun, verb } = bruteForce(_intCode);
  return 100 * noun + verb;
};

console.log(runBruteForce(intCode));
