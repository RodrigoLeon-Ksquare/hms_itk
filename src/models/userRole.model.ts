import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const UserRole = sequelize.define("UserRoles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
