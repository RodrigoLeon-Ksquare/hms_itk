import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { UserRole } from "./userRole.model";

export const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  gender: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  contact_number: {
    type: DataTypes.INTEGER,
  },
});

User.hasOne(UserRole, {
  foreignKey: "userId",
  sourceKey: "id",
});

UserRole.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});
