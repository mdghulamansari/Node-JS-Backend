const isBetweenEqualTo = (marks, lowest, highest) =>
  marks >= lowest && marks <= highest;

const printGrade = (name, marks) => {
  if (isBetweenEqualTo(marks, 97, 100)) {
    console.log(`${name} has scored A+`);
  } else if (isBetweenEqualTo(marks, 93, 96)) {
    console.log(`${name} has scored A`);
  } else if (isBetweenEqualTo(marks, 90, 92)) {
    console.log(`${name} has scored A-`);
  } else if (isBetweenEqualTo(marks, 87, 89)) {
    console.log(`${name} has scored B+`);
  } else if (isBetweenEqualTo(marks, 83, 86)) {
    console.log(`${name} has scored B`);
  } else if (isBetweenEqualTo(marks, 80, 82)) {
    console.log(`${name} has scored B-`);
  } else if (isBetweenEqualTo(marks, 77, 79)) {
    console.log(`${name} has scored C+`);
  } else if (isBetweenEqualTo(marks, 73, 76)) {
    console.log(`${name} has scored C`);
  } else if (isBetweenEqualTo(marks, 70, 72)) {
    console.log(`${name} has scored C-`);
  } else if (isBetweenEqualTo(marks, 67, 69)) {
    console.log(`${name} has scored D`);
  } else if (isBetweenEqualTo(marks, 65, 66)) {
    console.log(`${name} has scored D`);
  } else if (isBetweenEqualTo(marks, 0, 64)) {
    console.log(`${name} has scored D`);
  } else {
    console.log("Invalid Marks");
  }
};

let sName = process.argv[2];
let marks = Number(process.argv[3]);
if (sName || marks) {
  printGrade(sName, marks);
} else {
  console.log("Please Pass the argument as Student's Name and Marks");
}
