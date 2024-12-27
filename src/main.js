// load doc
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

function getInputInLines(dayNumber, puzzleNumber, testCase = false) {
  const input = getInput(dayNumber, puzzleNumber, testCase);
  // split lines
  const inputLines = input.toString().split(/\r?\n|\r|\n/g);

  return inputLines;
}

function getInput(dayNumber, puzzleNumber, testCase = false) {
  const dirPath = path.join(__dirname, `day${dayNumber}`);
  const inputFile = testCase
    ? fs
        .readdirSync(dirPath)
        .filter(
          (file) =>
            file.startsWith(`test${puzzleNumber}`) && file.endsWith(".txt")
        )[0]
    : fs
        .readdirSync(dirPath)
        .filter(
          (file) =>
            file.startsWith(`input${puzzleNumber}`) && file.endsWith(".txt")
        )[0];
  const inputPath = path.join(dirPath, inputFile);
  const input = fs.readFileSync(inputPath);

  return input.toString();
}

export { getInputInLines, getInput };
