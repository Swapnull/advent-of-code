/*for each module mass, calculate its fuel and add it to the total. 
Then, treat the fuel amount you just calculated as the input mass and repeat the process, 
continuing until a fuel requirement is zero or negative. */

import fs from "fs";

const fuelFromMass = (mass: number) => Math.floor(mass / 3) - 2;

const moduleData = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n");

export const calculateMassRecursively = (input: number): number => {
  const requiredFuel = fuelFromMass(input);
  if (requiredFuel >= 0) {
    return requiredFuel + calculateMassRecursively(requiredFuel);
  } else {
    return 0;
  }
};

export const calculateLaunchMass = () =>
  moduleData.reduce(
    (agg, item) => agg + calculateMassRecursively(Number(item)),
    0
  );

/*console.log(calculateLaunchMass());
console.log("14", calculateMassRecursively(14));
console.log("1969", calculateMassRecursively(1969));
console.log("100756", calculateMassRecursively(100756));*/
