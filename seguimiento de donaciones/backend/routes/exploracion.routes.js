import express from "express";
const router = express.Router();
import {obtenerExploracion, agregarExploracion, borrarExploracion, actualizarExploracion, obtenerExploracionID} from "../controllers/exploracion.controllers.js"
import validateDocuments from "../middlewares/validate.documents.js";
import { check } from "express-validator";


router.get("/", obtenerExploracion);
router.get("/:id", obtenerExploracionID);
 router.post("/",agregarExploracion);

router.delete("/:id", borrarExploracion);
router.patch("/:id", actualizarExploracion)

export default router;