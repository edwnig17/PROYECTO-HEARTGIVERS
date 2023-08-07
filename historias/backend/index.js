import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import historiasRouter from "./routes/historias.routes.js"
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/historias",historiasRouter)

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);   
})