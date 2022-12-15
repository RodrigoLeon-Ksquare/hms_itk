"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRolesModel = exports.Roles = void 0;
const sequelize_1 = require("sequelize");
/*Roles model*/
class Roles extends sequelize_1.Model {
}
exports.Roles = Roles;
//Define columns
const initRolesModel = (sequelize) => {
    Roles.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        role: sequelize_1.DataTypes.STRING, //Preguntar si es array
    }, {
        sequelize, //instance of sequelize that reflects the conection
    });
};
exports.initRolesModel = initRolesModel;
