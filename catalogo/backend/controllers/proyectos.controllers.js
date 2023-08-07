import Catalogo from "../models/proyecto.js"
const obtenerCatalogo = async (req,res) => {
    try {
        const ciclista = await Catalogo.find();
        res.json(ciclista);
    } catch (error) {
        console.log(error);
    }
}

const obtenerCatalogoID = async (req,res) => {
    try {
        const ciclista = await Catalogo.findOne({_id:req.params.id});
        res.json(ciclista);
    } catch (error) {
        console.log(error);
    }
}


const agregarCatalogo = async (req, res) => {
    const {numeroCiclista, nombreCiclista, equipo, nacionalidad, edad, recorrido, puntos, lider, rendimiento, img} = req.body
    const ciclista = new Catalogo({numeroCiclista, nombreCiclista, equipo, nacionalidad, edad, recorrido, puntos, lider, rendimiento, img});
    //Nombre ciclista 
    const NombreCiclista = await Catalogo.findOne({nombreCiclista})
    const numeroC = await Catalogo.findOne({numeroCiclista})
    if(NombreCiclista)
        return res.status(400).json({message:"El ciclista ya esta registrado"});
    if(numeroC)
        return res.status(400).json({message:"El numero de Ciclista ya esta registrado"});

    await ciclista.save();
    res.json(ciclista);
}

const borrarCatalogo = async (req, res) => { 

    try {
        await Catalogo.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarCatalogo = async (req, res) => {
    try {
        // const data = req.body
        // const nameCiclista = await Catalogo.findOne({nombreCiclista});
        // const numCiclista = await Catalogo.findOne({numeroCiclista});
        // const imgCiclista = await Catalogo.findOne({img});
        // if(nameCiclista)
        //     if((nameCiclista._id).toString() != req.params.id)
        //     return res.status(400).json({message:"EL nombre ya se encuentra registrado"});
        // if(numCiclista)
        //     if((numCiclista._id).toString() != req.params.id)
        //     return res.status(400).json({message:"El numero ya se encuentra registrado"});
        // if(imgCiclista)
        //     if((imgCiclista._id).toString() != req.params.id)
        //     return res.status(400).json({message:"La imagen ya esta en uso"})
        const catalogo = await Catalogo.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(catalogo)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
        console.log(error);
    } 
}


export {obtenerCatalogo, obtenerCatalogoID, agregarCatalogo, borrarCatalogo, actualizarCatalogo};

