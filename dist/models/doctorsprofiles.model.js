"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDoctorsProfilesModel = exports.DoctorsProfiles = void 0;
const sequelize_1 = require("sequelize");
const users_model_1 = require("./users.model");
/*Patients profile model */
//Create model
class DoctorsProfiles extends sequelize_1.Model {
}
exports.DoctorsProfiles = DoctorsProfiles;
//Define columns
const initDoctorsProfilesModel = (sequelize) => {
    DoctorsProfiles.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        speciality: sequelize_1.DataTypes.STRING,
        professional_license: sequelize_1.DataTypes.NUMBER,
        available: sequelize_1.DataTypes.BOOLEAN,
    }, {
        sequelize, //instance of sequelize that reflects the conection
    });
};
exports.initDoctorsProfilesModel = initDoctorsProfilesModel;
//One to one relation
users_model_1.Users.hasOne(DoctorsProfiles);
DoctorsProfiles.belongsTo(users_model_1.Users);
