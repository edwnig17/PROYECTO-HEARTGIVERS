import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Nombre es requerido"],
    trim: true,
  },
  cedula: {
    type: String,
    required: [true, "Cédula es requerida"],
    trim: true,
  },
  correo: {
    type: String,
    required: [true, "Correo es requerido"],
    trim: true,
  },
  horaAsistencia: {
    type: String,
    required: [true, "Hora de asistencia es requerida"],
    trim: true,
  },
  titulo: {
    type: String,
    trim: true,
  },
  imagen: {
    type: String,
    trim: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

const Catalogo = mongoose.model("catalogo", ciclistasSchema, "catalogo");

export default Catalogo;
