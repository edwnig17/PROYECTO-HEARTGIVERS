import Catalogo from "../models/proyecto.js";

const obtenerCatalogo = async (req, res) => {
    try {
        const catalogo = await Catalogo.find();
        res.json(catalogo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error al obtener el catálogo" });
    }
}

const crearElementoCatalogo = async (req, res) => {
    try {
        const { nombre, cedula, correo, horaAsistencia } = req.body;

        const nuevoElemento = new Catalogo({
            nombre,
            cedula,
            correo,
            horaAsistencia
        });

        await nuevoElemento.save();

        res.status(201).json({ mensaje: 'Elemento creado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { obtenerCatalogo, crearElementoCatalogo };
