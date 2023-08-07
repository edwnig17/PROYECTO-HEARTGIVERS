import mongoose from "mongoose";
const contactoSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthdate: { type: Date, required: true },
    opinion: { type: String,  }, 
  });
  
  const Contacto = mongoose.model('Contacto', contactoSchema);
  
  export default Contacto;
  