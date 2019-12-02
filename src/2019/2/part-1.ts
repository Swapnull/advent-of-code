import * as fs from "fs";

const intCode = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split(",")
  .map(Number);

export const getNextCode = (code: number[], index: number) => {
  const [opcode, first, second, write] = code.slice(index);
  const updatedIntCode = [...code];
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
  let updatedIntCode = [..._intCode];
  for (let i = 0; i <= _intCode.length; i += 4) {
    const res = getNextCode(updatedIntCode, i);
    if (res && res.length) updatedIntCode = res;
    else break;
  }
  return updatedIntCode;
};

export const main = (_intCode: number[]) => {
  const state = [..._intCode];
  state[1] = 12;
  state[2] = 2;
  return runIntCode(state);
};

console.log(main(intCode)[0]);
