import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import peliculaRoutes from "./src/routes/peliculasRoutes.js";
import funcionRoutes from "./src/routes/funcionRoutes.js";
import salaRoutes from "./src/routes/salaRoutes.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/peliculas", peliculaRoutes);
app.use("/funciones", funcionRoutes);
app.use("/salas", salaRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("API Cinear");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});