"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const users_model_1 = require("./users.model");
const roles_model_1 = require("./roles.model");
//import { initUsersRolesModel } from "./usersroles.model";
const patientsprofiles_model_1 = require("./patientsprofiles.model");
const doctorsprofiles_model_1 = require("./doctorsprofiles.model");
const admins_model_1 = require("./admins.model");
const appointments_model_1 = require("./appointments.model");
const models = [
    users_model_1.initUsersModel,
    roles_model_1.initRolesModel,
    patientsprofiles_model_1.initPatientsProfilesModel,
    doctorsprofiles_model_1.initDoctorsProfilesModel,
    admins_model_1.initAdminsModel,
    appointments_model_1.initAppointmentsModel,
];
//Start sequelize
const startSequelize = (db_name, db_password, db_hostname, db_username) => {
    exports.sequelize = new sequelize_1.Sequelize(db_name, db_username, db_password, {
        dialect: "postgres",
        host: db_hostname,
    });
    for (const initModel of models) {
        initModel(exports.sequelize);
    }
    return exports.sequelize;
};
exports.startSequelize = startSequelize;
