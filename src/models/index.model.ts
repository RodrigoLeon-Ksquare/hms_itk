import { Sequelize } from "sequelize";
import { initUsersModel } from "./users.model";
import { initRolesModel } from "./roles.model";
//import { initUsersRolesModel } from "./usersroles.model";
import { initPatientsProfilesModel } from "./patientsprofiles.model";
import { initDoctorsProfilesModel } from "./doctorsprofiles.model";
import { initAdminsModel } from "./admins.model";
import { initAppointmentsModel } from "./appointments.model";
export let sequelize: Sequelize;

const models = [
  initUsersModel,
  initRolesModel,
  initPatientsProfilesModel,
  initDoctorsProfilesModel,
  initAdminsModel,
  initAppointmentsModel,
];

//Start sequelize
export const startSequelize = (
  db_name: string,
  db_password: string,
  db_hostname: string,
  db_username: string
) => {
  sequelize = new Sequelize(db_name, db_username, db_password, {
    dialect: "postgres",
    host: db_hostname,
  });
  for (const initModel of models) {
    initModel(sequelize);
  }
  return sequelize;
};
