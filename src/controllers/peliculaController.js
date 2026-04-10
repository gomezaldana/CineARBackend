import { Pelicula } from "../models/pelicula.js";

export const postPelicula = async (req, res) => {
    try {
        const nuevaPelicula = new Pelicula(req.body);
        const peliculaGuardada = await nuevaPelicula.save();

        res.status(201).json(peliculaGuardada);
        console.log(req.body);

    } catch (error) {
        res.status(500).json({ error: "Error al crear película" });
    }
};

export const getPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener películas" });
    }
};


export const getPeliculaPorID = async (req, res) => {
    try {
        const { id } = req.params;

        const pelicula = await Pelicula.findById(id);

        if (!pelicula) {
            return res.status(404).json({ msg: "Película no encontrada" });
        }

        res.json(pelicula);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la película", error });
    }
};

export const borrarPeliculaPorID = async (req, res) => {

    const id = req.params.id;

    try {
        const pelicula = await Pelicula.findByIdAndDelete(id);
        if (!pelicula) {
            return res.status(404).json({ msg: "Película no encontrada" });
        }
        res.json({ msg: "Película eliminada correctamente", pelicula });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la película", error });
    }
}