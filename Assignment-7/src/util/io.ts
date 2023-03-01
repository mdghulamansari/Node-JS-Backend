import Student from "../models/student";
import Prompt from "prompt-sync";

const prompt = Prompt();

export const getStudentData = async (
  id: number = -1
): Promise<Student | null> => {
  try {
    const name = prompt("Enter Student's Name: ").trim();
    const age = prompt("Enter Student's Age: ").trim();
    const gender = prompt("Enter Student's Gender: ").trim();
    const student = await Student.build({ name, age: age ? +age : 0, gender });
    await student.validate();
    return student;
  } catch (err: any) {
    console.log(err.message);
  }
  return null;
};
