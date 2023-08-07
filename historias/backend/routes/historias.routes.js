import express from "express";
const router = express.Router();
import {obtenerHistorias, agregarHistorias, borrarHistorias, actualizarHistorias, obtenerHistoriasID} from "../controllers/historias.controllers.js"
import validateDocuments from "../middlewares/validate.documents.js";
import { check } from "express-validator";

router.get("/", obtenerHistorias);
router.get("/:id", obtenerHistoriasID);
 router.post("/",agregarHistorias);

router.delete("/:id", borrarHistorias);
router.patch("/:id", actualizarHistorias)

export default router;