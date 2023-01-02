import { Sequelize } from "sequelize";

//Conection to the DB with sequelize
export const sequelize = new Sequelize("hms_itk", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
});
