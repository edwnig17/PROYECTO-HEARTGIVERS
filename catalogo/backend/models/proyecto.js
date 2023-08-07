import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: [true,'Numero es requerido'],
        trim: true,
    },
    imagen: {
        type: String,
        required: [true,'Nombre es requerido'],
        trim: true,
    },
    descripcion: {
        type: String,
        required: [true,'Equipo es requerido'],
        trim: true,
    },
   
    },
    {
        timestamps: true,
    }
    );

    const Catalogo = mongoose.model('catalogo', ciclistasSchema,'catalogo');

    export default Catalogo;
    
    