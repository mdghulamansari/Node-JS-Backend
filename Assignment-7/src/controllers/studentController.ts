import Student from "../models/student";

export const getStudent = async (id: number): Promise<Student | null> => {
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error("\nStudent ID not found.");
    }
    return student;
  } catch (err: any) {
    console.log(err.message);
  }
  return null;
};

export const getStudents = async (): Promise<Student[] | null> => {
  try {
    const students: Student[] = await Student.findAll();
    return students;
  } catch (err: any) {
    console.log(err.message);
  }
  return null;
};

export const saveStudent = async ({
  name,
  age,
  gender,
}: Student): Promise<Student | null> => {
  try {
    const student = await Student.create({ name, age, gender });
    console.log("\nStudent saved successfully.");
    return student;
  } catch (err: any) {
    console.log(err.message);
  }
  return null;
};

export const updateStudent = async ({
  id,
  name,
  age,
  gender,
}: Student): Promise<Student | null> => {
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error("\nStudent Id not found.");
    }
    const updatedStudent = await student.update({ name, age, gender });
    console.log("\nStudent updated successfully.");
    return updatedStudent;
  } catch (err: any) {
    console.log(err.message);
  }
  return null;
};

export const deleteStudent = async (id: number): Promise<Student | null> => {
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error("\nStudent Id not found.");
    }
    await student.destroy({ force: true });
    console.log("\nStudent deleted successfully.");
    return student;
  } catch (err: any) {
    console.log(err.message);
  }
  return null;
};
