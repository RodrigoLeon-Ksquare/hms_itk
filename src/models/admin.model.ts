import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { UserRole } from "./userRole.model";

export const Admin = sequelize.define("Admins", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  available: {
    type: DataTypes.BOOLEAN,
  },
});

UserRole.hasOne(Admin, {
  foreignKey: "userRoleId",
  sourceKey: "id",
});

Admin.belongsTo(UserRole, {
  foreignKey: "userRoleId",
  targetKey: "id",
});
