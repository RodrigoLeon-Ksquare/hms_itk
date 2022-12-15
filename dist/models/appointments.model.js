"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAppointmentsModel = exports.Appointments = void 0;
const sequelize_1 = require("sequelize");
const doctorsprofiles_model_1 = require("./doctorsprofiles.model");
const patientsprofiles_model_1 = require("./patientsprofiles.model");
/*Patients profile model */
//Create model
class Appointments extends sequelize_1.Model {
}
exports.Appointments = Appointments;
//Define columns
const initAppointmentsModel = (sequelize) => {
    Appointments.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        appointment_date: sequelize_1.DataTypes.DATE,
        appointment_hour: sequelize_1.DataTypes.TIME,
    }, {
        sequelize, //instance of sequelize that reflects the conection
    });
};
exports.initAppointmentsModel = initAppointmentsModel;
patientsprofiles_model_1.PatientsProfiles.hasOne(Appointments);
Appointments.belongsTo(patientsprofiles_model_1.PatientsProfiles);
doctorsprofiles_model_1.DoctorsProfiles.hasOne(Appointments);
Appointments.belongsTo(patientsprofiles_model_1.PatientsProfiles);
