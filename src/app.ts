//Express basic configuration
import express, { Application } from "express";
import { Request, Response } from "express";

//Importando rutas
//import appointmentRoutes from "./routes/appointment.routes";
import { UserRouter } from "./routes/user.routes";

const app: Application = express();

app.use(express.json());
//usando rutas de usuario
app.use("/users", UserRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("vive");
});
//app.use(appointmentRoutes);

export default app;
/*
import express, { Application, Request, Response } from "express";
//import { UserRouter } from "./routes/user.routes";

const app: Application = express();

app.use(express.json());

//app.use("/users", UserRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("vive");
});

export default app;
*/
