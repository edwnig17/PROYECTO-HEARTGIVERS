import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/config.js';
import proyectosRouter from './routes/proyectos.routes.js';
import cors from 'cors';

dotenv.config();
conectarDB();

const app = express();
const PORT = process.env.PORT || 3322;

app.use(cors());
app.use(express.json());

app.use('/api/catalogo', proyectosRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
