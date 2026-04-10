import mongoose from "mongoose";

const butacaSchema = new mongoose.Schema({
  funcion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Funcion"
  },
  fila: String,
  numero: Number,
  estado: {
    type: String,
    enum: ["libre", "ocupada"],
    default: "libre"
  }
});

export default mongoose.model("Butaca", butacaSchema);