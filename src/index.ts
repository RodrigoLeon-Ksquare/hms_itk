//Start express server and sequelize
import app from "./app";
import { sequelize } from "./database/database";
/*
import "./models/user.models";
import "./models/role.model";
import "./models/userRole.model";
import "./models/patient.model";
import "./models/doctor.model";
import "./models/admin.model";
import "./models/appointment.model";
*/

async function main() {
  try {
    //await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connection has been established succesfully");
    app.listen(5000);
    console.log("Server is listening on port", 5000);
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
}

main();

/*
import dotenv from "dotenv";
dotenv.config();
import { startSequelize } from "./models/index.model";
//import * as admin from "firebase-admin";
import app from "./app";
import envs from "./models/configDB";
const PORT = process.env.PORT;

//admin.initializeApp();

//const envRunning = process.env.ENVIRONMENT === "testing" ? envs.test : envs.dev;
dotenv.config();
//const PORT = process.env.PORT;
const DB_PASS = <string>process.env.DB_PASS;
const DB_USER = <string>process.env.DB_USER;
const DB_NAME = <string>process.env.DB_NAME;
const DB_HOSTNAME = <string>process.env.DB_HOSTNAME;

app.listen(PORT, async () => {
  try {
    const sequelize = startSequelize(DB_NAME, DB_PASS, DB_HOSTNAME, DB_USER);
    await sequelize.sync();
    console.info("DB and Express is up and running!!!");
  } catch (error) {
    console.error(error);
    process.abort();
  }
});
*/
