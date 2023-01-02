"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const userRole_model_1 = require("./userRole.model");
exports.User = database_1.sequelize.define("Users", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    birthday: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    contact_number: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.User.hasOne(userRole_model_1.UserRole, {
    foreignKey: "userId",
    sourceKey: "id",
});
userRole_model_1.UserRole.belongsTo(exports.User, {
    foreignKey: "userId",
    targetKey: "id",
});
