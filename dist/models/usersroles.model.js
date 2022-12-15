"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUsersRolesModel = exports.UsersRoles = void 0;
const sequelize_1 = require("sequelize");
const roles_model_1 = require("./roles.model");
const users_model_1 = require("./users.model");
/*UsersRoles*/
class UsersRoles extends sequelize_1.Model {
}
exports.UsersRoles = UsersRoles;
//Define columns
const initUsersRolesModel = (sequelize) => {
    UsersRoles.init({
        users_id: sequelize_1.DataTypes.INTEGER,
        roles_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize, //instance of sequelize that reflects the conection
    });
};
exports.initUsersRolesModel = initUsersRolesModel;
roles_model_1.Roles.hasOne(UsersRoles);
UsersRoles.belongsTo(roles_model_1.Roles);
users_model_1.Users.hasOne(UsersRoles);
UsersRoles.belongsTo(users_model_1.Users);
