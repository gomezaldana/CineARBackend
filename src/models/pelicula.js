import mongoose from "mongoose";

const peliculaSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  duracion: Number,
  imagen: String,
  trailer: String,
  generos: [String],
  fechaEstreno: Date
});

export const Pelicula = mongoose.model("Pelicula", peliculaSchema);