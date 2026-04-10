import mongoose from "mongoose";

const funcionSchema = new mongoose.Schema({
  pelicula: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pelicula"
  },
  sala: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sala"
  },
  fecha: String,
  hora: String,
  precioBase: Number,
  formato: {
    type: String,
    enum: ["2D", "3D", "IMAX"],
    default: "2D"
  },
  idioma: {
    type: String,
    enum: ["doblada", "subtitulada"],
    default: "doblada"
  }
});

export default mongoose.model("Funcion", funcionSchema);