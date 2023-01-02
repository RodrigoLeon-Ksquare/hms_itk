import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { UserRole } from "./userRole.model";

export const Role = sequelize.define("Roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role_name: {
    type: DataTypes.STRING,
  },
});

Role.hasOne(UserRole, {
  foreignKey: "roleId",
  sourceKey: "id",
});

UserRole.belongsTo(Role, {
  foreignKey: "roleId",
  targetKey: "id",
});
