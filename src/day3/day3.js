import { getInput } from "../main.js";

function cleanUpInput(input) {
  const regEx = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
  const matches = [...input.matchAll(regEx)];
  return matches;
}

function getSumOfMultiplications(input) {
  const cleanInput = cleanUpInput(input);
  //   console.log(cleanInput);
  let sum = 0;
  let skip = false;

  for (const match of cleanInput) {
    if (!skip) {
      if (match[0].includes("mul")) {
        const [a, b] = match[0].match(/\d+/g);
        sum += a * b;
      } else if (match[0].includes("don't()")) {
        skip = true;
      }
    } else if (skip && match[0].includes("do()")) {
      skip = false;
    }

    console.log(`Match: ${match[0]}, Sum: ${sum}, Skip: ${skip}`);
  }

  return sum;
}

const sumOfMultiplications = getSumOfMultiplications(getInput(3, 1));
console.log(`Sum of Multiplications: ${sumOfMultiplications}`);
