import Contacto from "../models/contacto.js";

const agregarContacto = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
  birthdate ,
  opinion
  } = req.body;

  try {
    const nombreContactoExistente = await Contacto.findOne({ firstName });
    if (nombreContactoExistente) {
      return res.status(400).json({ message: "El firstName ya está registrado" });
    }

    const contacto = new Contacto({
      firstName,
      lastName,
      email,
    birthdate ,
    opinion
    });

    await contacto.save();
    res.json(contacto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al agregar la historia" });
  }
};

const obtenerContacto = async (req, res) => {
  try {
    const contacto= await Contacto.find();
    res.json(contacto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener las contactos" });
  }
};


export { agregarContacto, obtenerContacto};
