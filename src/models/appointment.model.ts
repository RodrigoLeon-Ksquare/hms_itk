import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Patient } from "./patient.model";
import { Doctor } from "./doctor.model";

export const Appointment = sequelize.define("Appointments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.STRING,
  },
  hour: {
    type: DataTypes.TIME,
  },
});

Patient.hasOne(Appointment, {
  foreignKey: "patientId",
  sourceKey: "id",
});

Appointment.belongsTo(Patient, {
  foreignKey: "patientId",
  targetKey: "id",
});

Doctor.hasOne(Appointment, {
  foreignKey: "doctortId",
  sourceKey: "id",
});

Appointment.belongsTo(Doctor, {
  foreignKey: "doctortId",
  targetKey: "id",
});
