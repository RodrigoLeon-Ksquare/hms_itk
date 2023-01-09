"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Express basic configuration
const express_1 = __importDefault(require("express"));
//Importando rutas
//import appointmentRoutes from "./routes/appointment.routes";
const user_routes_1 = require("./routes/user.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//usando rutas de usuario
app.use("/users", user_routes_1.UserRouter);
app.get("/", (req, res) => {
    res.send("vive");
});
//app.use(appointmentRoutes);
exports.default = app;
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
