import { Sequelize } from "sequelize-typescript";
import * as dotEnv from "dotenv";
import { Dialect } from "sequelize";

dotEnv.config();

export const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT as Dialect,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  models: [__dirname + "/models"],
  logging: false,
});
