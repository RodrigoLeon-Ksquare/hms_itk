"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
exports.Patient = database_1.sequelize.define("PatientProfiles", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    height: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    weight: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    blood_type: {
        type: sequelize_1.DataTypes.STRING,
    },
    allergies: {
        type: sequelize_1.DataTypes.STRING,
    },
    emergency_contact_name: {
        type: sequelize_1.DataTypes.STRING,
    },
});
