"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Start express server and sequelize
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database/database");
require("./models/user.models");
require("./models/role.model");
require("./models/userRole.model");
require("./models/patient.model");
require("./models/doctor.model");
require("./models/admin.model");
require("./models/appointment.model");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //await sequelize.authenticate();
            yield database_1.sequelize.sync({ force: true });
            console.log("Connection has been established succesfully");
            app_1.default.listen(5000);
            console.log("Server is listening on port", 5000);
        }
        catch (error) {
            console.log("Unable to connect to the database", error);
        }
    });
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
