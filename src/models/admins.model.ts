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
import { Users } from "./users.model";

/*Patients profile model */
//Create model
export class Admins extends Model<
  InferAttributes<Admins>,
  InferCreationAttributes<Admins>
> {
  declare id: number;
  declare available: boolean;
  //declare user_id: number; preguntar si la FK son las relaciones
}

//Define columns
export const initAdminsModel = (sequelize: Sequelize) => {
  Admins.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};

//One to one relation
Users.hasOne(Admins);
Admins.belongsTo(Users);
