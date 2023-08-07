import Catalogo from '../models/proyecto.js';

const searchCatalogo = async (req, res) => {
    const { coleccion, criterio } = req.params;

    try {
        let resultados;

        if (coleccion === 'catalogo') {
            const regex = new RegExp(criterio, 'i');
            resultados = await Catalogo.find({
                $or: [
                    { titulo: regex },
                    { descripcion: regex },
                    {imagen: regex },
                    
                ]
            });
        } else {
            return res.status(400).json({ message: 'Colección no válida' });
        }

        res.json({ results: resultados });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en la búsqueda' });
    }
};

export { searchCatalogo };
