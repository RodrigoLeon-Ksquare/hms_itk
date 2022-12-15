import exp from "constants";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";
import { DoctorsProfiles } from "./doctorsprofiles.model";
import { sequelize } from "./index.model";
import { PatientsProfiles } from "./patientsprofiles.model";

/*Patients profile model */
//Create model
export class Appointments extends Model<
  InferAttributes<Appointments>,
  InferCreationAttributes<Appointments>
> {
  declare id: number;
  declare appointment_date: string;
  declare appointment_hour: number;
  declare description: string;
  //declare patient_id: number; preguntar si la FK son las relaciones
  //declare doctor_id: number; preguntar si la FK son las relaciones
}

//Define columns
export const initAppointmentsModel = (sequelize: Sequelize) => {
  Appointments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      appointment_date: DataTypes.DATE,
      appointment_hour: DataTypes.TIME,
      description: DataTypes.STRING,
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};

PatientsProfiles.hasOne(Appointments);
Appointments.belongsTo(PatientsProfiles);
DoctorsProfiles.hasOne(Appointments);
Appointments.belongsTo(PatientsProfiles);
