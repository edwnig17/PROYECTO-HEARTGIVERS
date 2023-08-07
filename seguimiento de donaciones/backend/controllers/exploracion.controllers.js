import Exploracion from "../models/explora.js";
const obtenerExploracion = async (req,res) => {
    try {
        const exploracion = await Exploracion.find();
        res.json(exploracion);
    } catch (error) {
        console.log(error);
    }
}

const obtenerExploracionID = async (req,res) => {
    try {
        const exploracion = await Exploracion.findOne({_id:req.params.id});
        res.json(exploracion);
    } catch (error) {
        console.log(error);
    }
}


const agregarExploracion = async (req, res) => {
    const {numeroExploracion, nombreExploracion, equipo, nacionalidad, edad, recorrido, puntos, lider, rendimiento, img} = req.body
    const exploracion = new Exploracion({numeroExploracion, nombreExploracion, equipo, nacionalidad, edad, recorrido, puntos, lider, rendimiento, img});
    //Nombre cploracion 
    const NombreExploracion = await Exploracion.findOne({nombreExploracion})
    const numeroC = await Exploracion.findOne({numeroExploracion})
    if(NombreExploracion)
        return res.status(400).json({message:"El cploracion ya esta registrado"});
    if(numeroC)
        return res.status(400).json({message:"El numero de Cploracion ya esta registrado"});

    await exploracion.save();
    res.json(exploracion);
}

const borrarExploracion = async (req, res) => { 

    try {
        await Exploracion.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarExploracion = async (req, res) => {
    try {
       
        const exploracion = await Exploracion.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(exploracion)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
        console.log(error);
    } 
}


export {obtenerExploracion, obtenerExploracionID, agregarExploracion, borrarExploracion, actualizarExploracion};

