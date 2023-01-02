"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const userRole_model_1 = require("./userRole.model");
exports.Role = database_1.sequelize.define("Roles", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role_name: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.Role.hasOne(userRole_model_1.UserRole, {
    foreignKey: "roleId",
    sourceKey: "id",
});
userRole_model_1.UserRole.belongsTo(exports.Role, {
    foreignKey: "roleId",
    targetKey: "id",
});
