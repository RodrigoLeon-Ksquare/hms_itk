import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { UserRole } from "./userRole.model";

export const Doctor = sequelize.define("Doctors", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  speciality: {
    type: DataTypes.STRING,
  },
  professional_license: {
    type: DataTypes.INTEGER,
  },
  available: {
    type: DataTypes.BOOLEAN,
  },
});

UserRole.hasOne(Doctor, {
  foreignKey: "userRoleId",
  sourceKey: "id",
});

Doctor.belongsTo(UserRole, {
  foreignKey: "userRoleId",
  targetKey: "id",
});
