import express from "express";
const router = express.Router();
import {obtenerCatalogo, agregarCatalogo, borrarCatalogo, actualizarCatalogo, obtenerCatalogoID} from "../controllers/proyectos.controllers.js"
import validateDocuments from "../middlewares/validate.documents.js";
import { check } from "express-validator";


router.get("/", obtenerCatalogo);
router.get("/:id", obtenerCatalogoID);
 router.post("/",agregarCatalogo);
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

// ],agregarCatalogo);
router.delete("/:id", borrarCatalogo);
router.patch("/:id", actualizarCatalogo)

export default router;