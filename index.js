// code your solution here

let sampleObjects = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(arrayOfObjects) {
  let foundItem = arrayOfObjects.find((item) => item.result === "W");
  return foundItem === undefined ? undefined : foundItem["year"];
}
