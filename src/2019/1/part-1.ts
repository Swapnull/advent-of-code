/*Fuel required to launch a given module is based on its mass. 
Specifically, to find the fuel required for a module, take its mass, 
divide by three, round down, and subtract 2. */

import fs from "fs";

export const fuelFromMass = (mass: number | string) =>
  Math.floor(Number(mass) / 3) - 2;

const moduleData = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n");

export const calculateLaunchMass = () =>
  moduleData.reduce((agg, item) => agg + fuelFromMass(item), 0);

//console.log(calculateLaunchMass());
