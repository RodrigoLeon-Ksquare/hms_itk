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
export class PatientsProfiles extends Model<
  InferAttributes<PatientsProfiles>,
  InferCreationAttributes<PatientsProfiles>
> {
  declare id: number;
  declare height: number;
  declare weight: number;
  declare blood_type: string;
  declare allergies: string;
  declare emergency_contact_name: string;
  declare emergency_contact_number: number;
  //declare user_id: number; preguntar si la FK son las relaciones
}

//Define columns
export const initPatientsProfilesModel = (sequelize: Sequelize) => {
  PatientsProfiles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      height: DataTypes.STRING,
      weight: DataTypes.STRING,
      blood_type: DataTypes.STRING,
      allergies: DataTypes.STRING,
      emergency_contact_name: DataTypes.STRING,
      emergency_contact_number: DataTypes.NUMBER,
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};

//One to one relation
Users.hasOne(PatientsProfiles);
PatientsProfiles.belongsTo(Users);
