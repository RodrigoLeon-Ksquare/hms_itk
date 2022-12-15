"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Start express app
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", user_routes_1.UserRouter);
app.get("/", (req, res) => {
    res.send("vive");
});
exports.default = app;
