"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
//Conection to the DB with sequelize
exports.sequelize = new sequelize_1.Sequelize("hms_itk", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
});
