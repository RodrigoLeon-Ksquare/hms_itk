import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { UserRole } from "./userRole.model";

export const Patient = sequelize.define("Patients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  height: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  blood_type: {
    type: DataTypes.STRING,
  },
  allergies: {
    type: DataTypes.STRING,
  },
  emergency_contact_name: {
    type: DataTypes.STRING,
  },
});

UserRole.hasOne(Patient, {
  foreignKey: "userRoleId",
  sourceKey: "id",
});

Patient.belongsTo(UserRole, {
  foreignKey: "userRoleId",
  targetKey: "id",
});
