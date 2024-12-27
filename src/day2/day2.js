import { splitInputIntoLines } from "../main.js";

function getNumberOfSafeReports() {
  const reports = splitInputIntoLines(2, 1, false);
  let nbrOfSafeReports = 0;

  reports.forEach((report) => {
    if (isReportSafe(report)) {
      nbrOfSafeReports++;
      // }
    } else if (isSafeAfterProblemDampener(report)) {
      nbrOfSafeReports++;
    }
  });

  return nbrOfSafeReports;
}

function isReportSafe(report) {
  const levels = report.split(/\s/);
  const differences = getDifferences(levels);

  const hasSpike = differences.some(
    (diff) => Math.abs(diff) < 1 || Math.abs(diff) > 3
  );
  const isAlwaysIncreasing =
    differences.filter((diff) => diff > 0).length === differences.length;
  const isAlwaysDecreasing =
    differences.filter((diff) => diff < 0).length === differences.length;

  const isSafe = !hasSpike && (isAlwaysIncreasing || isAlwaysDecreasing);

  console.log(
    `Report: ${report}, Differences: ${differences}, Spike: ${hasSpike}, Increasing: ${isAlwaysIncreasing}, Decreasing: ${isAlwaysDecreasing}, Safe: ${isSafe}`
  );

  return isSafe;
}

function isSafeAfterProblemDampener(report) {
  const levels = report.split(/\s/);
  let isDampenedReportSafe = false;

  for (let index = 0; index < levels.length; index++) {
    const isSafe = isReportSafe(
      levels.filter((level, i) => i !== index).join(" ")
    );
    if (isSafe) {
      isDampenedReportSafe = true;
      break;
    }
  }

  return isDampenedReportSafe;
}

function getDifferences(levels) {
  const differences = [];

  levels.forEach((level, index) => {
    if (index !== levels.length - 1) {
      const difference = levels[index + 1] - level;
      differences.push(difference);
    }
  });

  return differences;
}

const result = getNumberOfSafeReports();
console.log(`Safe Reports: ${result}`);
