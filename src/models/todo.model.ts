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

//Creacion de modelo
export class Todo extends Model<
  InferAttributes<Todo>,
  InferCreationAttributes<Todo>
> {
  declare id: CreationOptional<number>;
  declare description: string;
  declare is_completed: CreationOptional<boolean>;
}

//Declarar columnas en el modelo
export const initTodoModel = (sequelize: Sequelize) => {
  Todo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: DataTypes.STRING,
      is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize, //instance of sequelize that reflects the conection
    }
  );
};
