import exp from "constants";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";
import { sequelize } from "./index.model";
import { Roles } from "./roles.model";
import { Users } from "./users.model";

/*UsersRoles*/

export class UsersRoles extends Model<
  InferAttributes<UsersRoles>,
  InferCreationAttributes<UsersRoles>
> {
  declare users_id: number;
  declare roles_id: number;
}

//Define columns
export const initUsersRolesModel = (sequelize: Sequelize) => {
  UsersRoles.init(
    {
      users_id: DataTypes.INTEGER,
      roles_id: DataTypes.INTEGER,
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};

Roles.hasOne(UsersRoles);
UsersRoles.belongsTo(Roles);
Users.hasOne(UsersRoles);
UsersRoles.belongsTo(Users);
