import { Router, Request, Response } from "express";
import {
  createUser,
  disableUser,
  getAllUsers,
  readUser,
  updateUser,
} from "../firebase/index.firebase";

export const UserRouter = Router();

//Obtener todos los usuarios
UserRouter.get("/getUsers", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(201).send({
      users,
    });
  } catch (error) {
    res.status(500).send({ error: "Somenthing went wrong" });
  }
});

//Obtener usuario por id
UserRouter.get("/:id", async (req: Request, res: Response) => {
  //chechar id
  const { id } = req.params;
  //si no se tiene id mandar error
  if (!id) return res.status(400).send({ error: "Missing fields" });
  //hace consulta
  try {
    const user = await readUser(id);
    res.status(201).send({
      user,
    });
  } catch (error) {
    res.status(500).send({ error: "Somenthing went wrong" });
  }
});

//Crear un usuario con rol paciente
UserRouter.post("/newUser", async (req: Request, res: Response) => {
  //info desde el body
  const { displayName, email, password } = req.body;
  //checar si falta info
  if (!displayName || !email || !password) {
    return res.status(400).send({ error: "Missing fields" });
  }

  // checar que el rol sea adecuado
  try {
    const userId = await createUser(displayName, email, password, "patient");
    res.status(201).send({
      userId,
    });
  } catch (error) {
    res.status(500).send({ error: "Somenthing went wrong" });
  }
});

//Actualizar usuario
UserRouter.put("/:id", async (req: Request, res: Response) => {
  //checar id
  const { id } = req.params;
  //info desde el body
  const { displayName } = req.body;

  //Checar si falta info
  if (!displayName) {
    return res.status(400).send({ error: "Missing fields" });
  }

  //Actualizar usuario
  try {
    const uptdateUserById = await updateUser(id, displayName);
    res.status(201).send({
      uptdateUserById,
    });
  } catch (error) {
    res.status(500).send({ error: "Somenthing went wrong" });
  }
});

//Eliminar usuario
UserRouter.delete("/:id", async (req: Request, res: Response) => {
  //chechar id
  const { id } = req.params;
  //si no se tiene id mandar error
  if (!id) return res.status(400).send({ error: "Missing fields" });
  //hace consulta
  try {
    const user = await disableUser(id, true);
    res.status(201).send({ succes: "User was disable" });
  } catch (error) {
    res.status(500).send({ error: "Somenthing went wrong" });
  }
});
