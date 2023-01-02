"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const userRole_model_1 = require("./userRole.model");
exports.Admin = database_1.sequelize.define("Admins", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    available: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
userRole_model_1.UserRole.hasOne(exports.Admin, {
    foreignKey: "userRoleId",
    sourceKey: "id",
});
exports.Admin.belongsTo(userRole_model_1.UserRole, {
    foreignKey: "userRoleId",
    targetKey: "id",
});
