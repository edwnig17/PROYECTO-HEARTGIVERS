import express from "express";
const router = express.Router();
import { obtenerCatalogo, crearElementoCatalogo } from "../controllers/proyectos.controllers.js"; 

router.get("/", obtenerCatalogo);

router.post("/crear-elemento", crearElementoCatalogo);

export default router;
