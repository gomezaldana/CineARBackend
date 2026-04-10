import Funcion from "../models/Funcion.js";
import { Sala } from "../models/Sala.js"; 
import Butaca from "../models/Butaca.js";

export const postFuncion = async (req, res) => {
    try {
        const { pelicula, sala, fecha, hora, precioBase } = req.body;

        const nuevaFuncion = await Funcion.create({
            pelicula,
            sala,
            fecha,
            hora,
            precioBase
        });

        const salaData = await Sala.findById(sala);

        const butacas = [];

        salaData.filas.forEach(fila => {
            for (let i = 1; i <= salaData.columnas; i++) {
                butacas.push({
                    funcion: nuevaFuncion._id,
                    fila,
                    numero: i
                });
            }
        });

        await Butaca.insertMany(butacas);

        res.status(201).json({
            msg: "Función creada con butacas",
            funcion: nuevaFuncion
        });

    } catch (error) {
        res.status(500).json({ error });
    }
};


export const getFunciones = async (req, res) => {
    try {
        const funciones = await Funcion.find();
        res.json(funciones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener todas las funciones" });
    }
};
