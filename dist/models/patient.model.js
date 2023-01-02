"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const userRole_model_1 = require("./userRole.model");
exports.Patient = database_1.sequelize.define("Patients", {
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
userRole_model_1.UserRole.hasOne(exports.Patient, {
    foreignKey: "userRoleId",
    sourceKey: "id",
});
exports.Patient.belongsTo(userRole_model_1.UserRole, {
    foreignKey: "userRoleId",
    targetKey: "id",
});
