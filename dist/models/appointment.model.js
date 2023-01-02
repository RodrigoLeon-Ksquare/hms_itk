"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const patient_model_1 = require("./patient.model");
const doctor_model_1 = require("./doctor.model");
exports.Appointment = database_1.sequelize.define("Appointments", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
    },
    hour: {
        type: sequelize_1.DataTypes.TIME,
    },
});
patient_model_1.Patient.hasOne(exports.Appointment, {
    foreignKey: "patientId",
    sourceKey: "id",
});
exports.Appointment.belongsTo(patient_model_1.Patient, {
    foreignKey: "patientId",
    targetKey: "id",
});
doctor_model_1.Doctor.hasOne(exports.Appointment, {
    foreignKey: "doctortId",
    sourceKey: "id",
});
exports.Appointment.belongsTo(doctor_model_1.Doctor, {
    foreignKey: "doctortId",
    targetKey: "id",
});
