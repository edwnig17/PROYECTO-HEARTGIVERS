import express from "express";
const router = express.Router();
import {obtenerHistorias, agregarHistorias, borrarHistorias, actualizarHistorias, obtenerHistoriasID} from "../controllers/historias.controllers.js"
import validateDocuments from "../middlewares/validate.documents.js";
import { check } from "express-validator";

router.get("/", obtenerHistorias);
router.get("/:id", obtenerHistoriasID);
 router.post("/",agregarHistorias);
//[
//     check("nombreCiclista", "El nombre es Obligatorio, no válido").not().isEmpty(),
//     check("nacionalidad", "Obligatorio ingresar nacionalidad, Nacionalidad no válida").not().isEmpty(),
//     check("edad").custom((edad) => {
//         if (edad && edad < 18) {
//             throw new Error('La edad debe ser mayor a 18');
//         }
//         return true;
//     }),
//     check("equipo").custom(async(nombre='')=>{
//         const existeEquipo = await Equipos.findOne({nombre});
//         if (!existeEquipo) {
//             throw new Error(`El equipo ${nombre} no está registrado en la base de datos`);
//         }
//     }),
//     validateDocuments

// ],agregarHistorias);
router.delete("/:id", borrarHistorias);
router.patch("/:id", actualizarHistorias)

export default router;