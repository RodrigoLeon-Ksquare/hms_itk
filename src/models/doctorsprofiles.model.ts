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
export class DoctorsProfiles extends Model<
  InferAttributes<DoctorsProfiles>,
  InferCreationAttributes<DoctorsProfiles>
> {
  declare id: number;
  declare speciality: string;
  declare professional_license: number;
  declare available: boolean;
  //declare user_id: number; preguntar si la FK son las relaciones
}

//Define columns
export const initDoctorsProfilesModel = (sequelize: Sequelize) => {
  DoctorsProfiles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      speciality: DataTypes.STRING,
      professional_license: DataTypes.NUMBER,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};

//One to one relation
Users.hasOne(DoctorsProfiles);
DoctorsProfiles.belongsTo(Users);
