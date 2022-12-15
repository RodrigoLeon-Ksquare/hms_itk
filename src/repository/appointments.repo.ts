import { InferAttributes } from "sequelize";
import { Appointments } from "../models/appointments.model";

//Create appointments

export const createAppointments = async (description: string) => {
  try {
    const newAppointment = await Appointments.create(description);

    return newAppointment.id;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAppointmentsById = async (id: number) => {
  try {
    const foundAppointment = await Appointments.findByPk(id);
    return foundAppointment;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateAppointmentsById = async (
  id: number,
  appointmentsModel: InferAttributes<Appointments>
) => {
  try {
    const foo = await Appointments.update(
      {
        hour: appointmentsModel.appointment_hour,
        date: appointmentsModel.appointment_date,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return foo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteAppointmentById = async (id: number) => {
  try {
    const foo = await Appointments.destroy({
      where: {
        id: id,
      },
    });
    return foo;
  } catch (error) {
    console.error(error);
    return null;
  }
};
