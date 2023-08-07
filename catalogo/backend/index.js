import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/config.js';
import proyectosRouter from './routes/proyectos.routes.js';
import searchRouter from './routes/search.routes.js'; 
import cors from 'cors';

dotenv.config();
conectarDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Usa los enrutadores
app.use('/api/catalogo', proyectosRouter);
app.use('/api/busqueda', searchRouter); 

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
