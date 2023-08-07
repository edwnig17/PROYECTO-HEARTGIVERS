import express from "express";
const router = express.Router();
import {obtenerExploracion, agregarExploracion, borrarExploracion, actualizarExploracion, obtenerExploracionID} from "../controllers/exploracion.controllers.js"
import validateDocuments from "../middlewares/validate.documents.js";
import { check } from "express-validator";


router.get("/", obtenerExploracion);
router.get("/:id", obtenerExploracionID);
 router.post("/",agregarExploracion);
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

// ],agregarExploracion);
router.delete("/:id", borrarExploracion);
router.patch("/:id", actualizarExploracion)

export default router;