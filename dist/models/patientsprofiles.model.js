"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPatientsProfilesModel = exports.PatientsProfiles = void 0;
const sequelize_1 = require("sequelize");
const users_model_1 = require("./users.model");
/*Patients profile model */
//Create model
class PatientsProfiles extends sequelize_1.Model {
}
exports.PatientsProfiles = PatientsProfiles;
//Define columns
const initPatientsProfilesModel = (sequelize) => {
    PatientsProfiles.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        height: sequelize_1.DataTypes.STRING,
        weight: sequelize_1.DataTypes.STRING,
        blood_type: sequelize_1.DataTypes.STRING,
        allergies: sequelize_1.DataTypes.STRING,
        emergency_contact_name: sequelize_1.DataTypes.STRING,
        emergency_contact_number: sequelize_1.DataTypes.NUMBER,
    }, {
        sequelize, //instance of sequelize that reflects the conection
    });
};
exports.initPatientsProfilesModel = initPatientsProfilesModel;
//One to one relation
users_model_1.Users.hasOne(PatientsProfiles);
PatientsProfiles.belongsTo(users_model_1.Users);
