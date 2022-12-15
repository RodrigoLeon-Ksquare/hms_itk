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

/*Users model */
//Create model
export class Users extends Model<
  InferAttributes<Users>,
  InferCreationAttributes<Users>
> {
  declare id: number;
  declare first_name: string;
  declare last_name: string;
  declare birthday: string;
  declare age: number;
  declare gender: string;
  declare email: string;
  declare contactNumber: number;
}

//Define columns
export const initUsersModel = (sequelize: Sequelize) => {
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      birthday: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
      contactNumber: DataTypes.INTEGER,
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};
