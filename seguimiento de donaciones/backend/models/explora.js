import mongoose from "mongoose";

const exploracionSchema = mongoose.Schema({


    beneficiados: {
        type: String,
        required: [true,'Beneficiado es requerido'],
        trim: true,
    },
    productoDonado: {
        type: String,
        required: [true,'Producto es requerido'],
        trim: true,
    },
    estadoProducto: {
        type: String,
        required: [true,'estadoProducto es requerido'],
        trim: true,
    },
   
    },
    {
        timestamps: true,
    }
    );

    const Exploracion = mongoose.model('exploracion', exploracionSchema,'exploracion');

    export default Exploracion;
    