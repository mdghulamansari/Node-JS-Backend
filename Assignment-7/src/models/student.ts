import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table
export default class Student extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Name is required" },
      is: {
        args: [/^[a-z\s]+$/i],
        msg: "Name is not valid",
      },
    },
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Age is required." },
      isNumeric: { msg: "Age should be positive number." },
      min: {
        args: [1],
        msg: "Age should be greater than 0.",
      },
      max: {
        args: [110],
        msg: "Age should be less than 110.",
      },
    },
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Gender is required." },
      genderChecker(value: string) {
        if (value.toLocaleLowerCase() in ["MALE", "FEMALE"]) {
          throw new Error("Must be Male or Female");
        }
      },
    },
  })
  gender: string;
}
