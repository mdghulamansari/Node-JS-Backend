import Student from "../models/student";

export const menu = (padding = 36) => {
  console.log("\n\n");
  console.log("-".repeat(padding));
  console.log("MENU".padStart(padding / 2 + 2));
  console.log("-".repeat(padding));
  console.log("1. Insert Student Record");
  console.log("2. Display Student Record");
  console.log("3. Search Student Record");
  console.log("4. Update Student Record");
  console.log("5. Delete Student Record");
  console.log("0. Exit");
};

export const display = (student: Student) => {
  process.stdout.write(`${student.id}`.padStart(3, "0").padEnd(6));
  process.stdout.write(student.name.padEnd(24));
  process.stdout.write(`${student.age}`.padEnd(6));
  console.log(student.gender);
};

export const displayAllStudent = (students: Student[] | Student) => {
  console.log("-".repeat(44));
  process.stdout.write("S.Id  ".padEnd(4));
  process.stdout.write("Name".padEnd(24));
  process.stdout.write("Age".padEnd(6));
  console.log("Gender");
  console.log("-".repeat(44));

  if (Array.isArray(students)) {
    students.forEach(display);
  } else {
    display(students);
  }
};
