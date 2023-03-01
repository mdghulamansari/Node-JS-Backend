import * as dotEnv from "dotenv";
import {
  getStudent,
  getStudents,
  saveStudent,
  updateStudent,
  deleteStudent,
} from "./controllers/studentController";
import { displayAllStudent, menu } from "./views/home";
dotEnv.config();
import { sequelize } from "./sequelize";
import Prompt from "prompt-sync";
import { getStudentData } from "./util/io";

const prompt = Prompt();

const app = async () => {
  let isExit: boolean = true;
  while (isExit) {
    menu();
    let choice = prompt("Enter your choice: ");
    switch (choice) {
      case "1":
        // INSERT
        const student = await getStudentData();
        if (student) {
          await saveStudent(student);
        }
        break;
      case "2":
        // Display
        const students = await getStudents();
        if (students) {
          await displayAllStudent(students);
        }
        break;
      case "3":
        // SEARCH
        const id = prompt("Enter Student's ID number to search: ");
        const searchedStudent = await getStudent(+id);
        if (searchedStudent) {
          await displayAllStudent(searchedStudent);
        }
        break;
      case "4":
        // UPDATE
        const updateId = prompt("Enter Student's ID number to update: ");
        const updatedStudent = await getStudentData();
        if (updatedStudent) {
          updatedStudent.id = +updateId;
          await updateStudent(updatedStudent);
        }
        break;
      case "5":
        // DELETE
        const deleteId = prompt("Enter Student's ID number to delete: ");
        await deleteStudent(+deleteId);
        break;
      case "0":
        isExit = false;
        console.log("Thank you.");
        console.log("Have a nice day ❤️");
        break;
      default:
        console.log("invalid choice!\nPlease try again!!!");
        break;
    }
  }
};

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app();
  } catch (err: any) {
    console.log(err.message);
  }
})();
