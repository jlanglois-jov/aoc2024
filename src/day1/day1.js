import { getInputInLines } from "../main.js";

const inputLines = getInputInLines(1, 1);
const lists = [[], []];
let totalDistance = 0;

inputLines.forEach((line) => {
  line.split(/\s{3}/).forEach((item, index) => {
    lists[index].push(item);
  });
});

lists.forEach((list) => list.sort((a, b) => a - b));

lists[0].forEach((item, index) => {
  const distance = item - lists[1][index];
  totalDistance += Math.abs(distance);
});

console.log(`(Part 1) Total Distance: ${totalDistance}`);

let totalSimilarity = 0;

lists[0].forEach((item) => {
  const occurances = lists[1].filter((item2) => item2 === item)?.length;
  const similarity = item * occurances;
  totalSimilarity += similarity;

  if (similarity > 0)
    console.log(
      `List[0] item: ${item}, Occurances: ${occurances}, Similarity: ${similarity}`
    );
});

console.log(`(Part 2) Total Similarity Score: ${totalSimilarity}`);
