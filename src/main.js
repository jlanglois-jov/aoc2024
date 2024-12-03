// load doc
const fs = require("node:fs");
const path = require("node:path");

function splitInputIntoLines(dayNumber, puzzleNumber, testCase = false) {
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
  // split lines
  const inputLines = input.toString().split(/\r?\n|\r|\n/g);

  return inputLines;
}

module.exports = { splitInputIntoLines };
