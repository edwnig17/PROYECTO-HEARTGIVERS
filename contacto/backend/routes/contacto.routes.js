import express from "express";
const router = express.Router();
import {obtenerContacto, agregarContacto} from "../controllers/contacto.controllers.js"
import validateDocuments from "../middlewares/validate.documents.js";
import { check } from "express-validator";

router.get("/", obtenerContacto);

 router.post("/",agregarContacto);
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

// ],agregarContacto);


export default router;