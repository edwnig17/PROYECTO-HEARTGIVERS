import express from 'express';
const router = express.Router();
import { searchCatalogo } from '../controllers/search.controllers.js';

router.get('/:coleccion/:criterio', searchCatalogo);

export default router;
