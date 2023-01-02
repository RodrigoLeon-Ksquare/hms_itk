"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Express basic configuration
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
