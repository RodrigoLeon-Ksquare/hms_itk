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

/*Roles model*/
export class Roles extends Model<
  InferAttributes<Roles>,
  InferCreationAttributes<Roles>
> {
  declare id: number;
  declare role: string;
}

//Define columns
export const initRolesModel = (sequelize: Sequelize) => {
  Roles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role: DataTypes.STRING, //Preguntar si es array
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};
