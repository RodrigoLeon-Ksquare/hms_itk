import { Router, Request, Response } from "express";
import {
  createAppointments,
  deleteAppointmentById,
  fetchAppointmentsById,
  updateAppointmentsById,
} from "../repository/appointments.repo";
export const AppointmentsRouter = Router();

//Create end point
AppointmentsRouter.post("/", async (req: Request, res: Response) => {
  const description: string = req.body.description as string;

  //Si no tiene descripcion
  if (!description) {
    res.status(400);
    return res.send({
      message: "No description",
    });
  }
  //Si tiene descripcion, crear cita
  const newAppointmentId = await createAppointments(description);

  res.status(201);
  res.send({
    id: newAppointmentId,
  });
});

//Read endpoint
AppointmentsRouter.get(
  "/:appointmentId",
  async (req: Request, res: Response) => {
    const appointmentId = Number(req.params["appointmentId"]);

    //Si el Id es menor o igual a 0 mandar error
    if (appointmentId <= 0) {
      res.status(400);
      return res.send({
        error: "Invalid id",
      });
    }
    const foundAppointment = await fetchAppointmentsById(appointmentId);

    //Si el Id es false mandar error
    if (!foundAppointment) {
      res.status(400);
      return res.send({
        error: "Appointment not found",
      });
    }

    //Si el appointmentId es mayor a 0 y existe en la DB mandarlo
    res.send(foundAppointment);
  }
);

//Update endpoint
AppointmentsRouter.put(
  "/:appointmentId",
  async (req: Request, res: Response) => {
    const appointmentId = Number(req.params["appointmentId"]);
    const body = req.body;
    if (appointmentId <= 0) {
      res.status(400);
      return res.send({
        error: "Invalid id",
      });
    }

    const affectedRows = await updateAppointmentsById(appointmentId, body);

    if (!affectedRows) {
      res.status(500);
      return res.send({
        error: "Something went wrong! :(",
      });
    }
    if (affectedRows[0] === 0) {
      res.status(400);
      return res.send({
        error: "Update failed",
      });
    }
    const foundAppointment = await fetchAppointmentsById(appointmentId);
    res.status(200);
    return res.send(foundAppointment);
  }
);

//Delete
AppointmentsRouter.delete(
  "/:appointmentId",
  async (req: Request, res: Response) => {
    const appointmentId = Number(req.params["appointmentId"]);
    if (appointmentId <= 0) {
      res.status(400);
      return res.send({
        error: "Invalid Id",
      });
    }
    const foo = await deleteAppointmentById(appointmentId);
    if (!foo) {
      return res.status(400).send({
        error: "Cannot delete",
      });
    }
    return res.sendStatus(200);
  }
);
