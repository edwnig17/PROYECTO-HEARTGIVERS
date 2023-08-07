import Historias from "../models/historias.js";

const agregarHistorias = async (req, res) => {
  const {
    nombreProyecto,
    donador,
    impactoProyecto,
    beneficiado
  } = req.body;

  try {
    const nombreHistoriasExistente = await Historias.findOne({ nombreProyecto });
    if (nombreHistoriasExistente) {
      return res.status(400).json({ message: "El nombreProyecto ya está registrado" });
    }

    const historias = new Historias({
      nombreProyecto,
      donador,
      impactoProyecto,
      beneficiado
    });

    await historias.save();
    res.json(historias);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al agregar la historia" });
  }
};

const obtenerHistorias = async (req, res) => {
  try {
    const historias = await Historias.find();
    res.json(historias);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener las historias" });
  }
};

const obtenerHistoriasID = async (req, res) => {
  try {
    const historias = await Historias.findOne({ _id: req.params.id });
    res.json(historias);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener la historia" });
  }
};

const borrarHistorias = async (req, res) => {
  try {
    await Historias.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "No existe" });
  }
};

const actualizarHistorias = async (req, res) => {
  try {
    const historias = await Historias.findOne({ _id: req.params.id });

    if (!historias) {
      return res.status(404).json({ error: "No existe" });
    }

    // Realiza tus validaciones aquí si es necesario

    const historiasActualizada = await Historias.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(historiasActualizada);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "No existe" });
  }
};

export { agregarHistorias, obtenerHistorias, obtenerHistoriasID, borrarHistorias, actualizarHistorias };
