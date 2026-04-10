import { Sala } from "../models/Sala.js";

export const postSala = async (req, res) => {
    try {
        const nuevaSala = new Sala(req.body);
        const salaGuardada = await nuevaSala.save();

        res.status(201).json(salaGuardada);
        console.log(req.body);

    } catch (error) {
        res.status(500).json({ error: "Error al crear sala" });
    }
};

export const getSalas = async (req, res) => {
    try {
        const salas = await Sala.find();
        res.json(salas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener todas las salas" });
    }
};


export const getSalaPorID = async (req, res) => {
    try {
        const { id } = req.params;

        const sala = await Sala.findById(id);

        if (!sala) {
            return res.status(404).json({ msg: "Sala no encontrada" });
        }
        res.json(sala);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la sala", error });
    }
};

export const borrarSalaPorID = async (req, res) => {

    const id = req.params.id;

    try {
        const sala = await Sala.findByIdAndDelete(id);
        if (!sala) {
            return res.status(404).json({ msg: "Sala no encontrada" });
        }
        res.json({ msg: "Sala eliminada correctamente", sala });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la sala", error });
    }
}