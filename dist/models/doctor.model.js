"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const userRole_model_1 = require("./userRole.model");
exports.Doctor = database_1.sequelize.define("Doctors", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    speciality: {
        type: sequelize_1.DataTypes.STRING,
    },
    professional_license: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    available: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
userRole_model_1.UserRole.hasOne(exports.Doctor, {
    foreignKey: "userRoleId",
    sourceKey: "id",
});
exports.Doctor.belongsTo(userRole_model_1.UserRole, {
    foreignKey: "userRoleId",
    targetKey: "id",
});
