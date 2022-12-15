"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAdminsModel = exports.Admins = void 0;
const sequelize_1 = require("sequelize");
const users_model_1 = require("./users.model");
/*Patients profile model */
//Create model
class Admins extends sequelize_1.Model {
}
exports.Admins = Admins;
//Define columns
const initAdminsModel = (sequelize) => {
    Admins.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        available: sequelize_1.DataTypes.BOOLEAN,
    }, {
        sequelize, //instance of sequelize that reflects the conection
    });
};
exports.initAdminsModel = initAdminsModel;
//One to one relation
users_model_1.Users.hasOne(Admins);
Admins.belongsTo(users_model_1.Users);
