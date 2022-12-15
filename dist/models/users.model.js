"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUsersModel = exports.Users = void 0;
const sequelize_1 = require("sequelize");
/*Users model */
//Create model
class Users extends sequelize_1.Model {
}
exports.Users = Users;
//Define columns
const initUsersModel = (sequelize) => {
    Users.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: sequelize_1.DataTypes.STRING,
        last_name: sequelize_1.DataTypes.STRING,
        birthday: sequelize_1.DataTypes.STRING,
        age: sequelize_1.DataTypes.INTEGER,
        gender: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        contactNumber: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize, //instance of sequelize that reflects the conection
    });
};
exports.initUsersModel = initUsersModel;
