import mongoose from "mongoose";

const salaSchema = new mongoose.Schema({
  numeroSala: Number,
  filas: [String], 
  columnas: Number 
});

export const Sala = mongoose.model("Sala", salaSchema);
