import mongoose from "mongoose";

const historiasSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'id es requerido'],
        trim: true,
    },
    nombreProyecto: {
        type: String,
        required: [true,'nombre es requerido'],
        trim: true,
    },
    donador: {
        type: String,
        required: [true,'donador es requerido'],
        trim: true,
    },
    impactoProyecto:{
        type: String,
        required: [true,'impacto es requerido'],
        trim: true,
    },
    beneficiado:{
        type: String,
        required: [true,'beneficiado es requerido'],
        trim: true,
    },
   
    },
    {
        timestamps: true,
    }
    );

    const Historias = mongoose.model('historias', historiasSchema,'historias');

    export default Historias;
    