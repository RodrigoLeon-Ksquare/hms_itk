//Rutas de la tabla projects
import { Router } from "express";
const router = Router();

//Leer proyecto
router.get("/appointments");
//Crear proyecto
router.post("/appointments");

//Actualizar proyecto
router.put("/appointments/:id");

//Eliminar
router.delete("/appointments/:id");

//Obtener 1 solo proyecto
router.get("/appointments/:id");
export default router;
