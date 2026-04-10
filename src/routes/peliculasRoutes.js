import express from "express";
import { postPelicula, getPeliculas,getPeliculaPorID, borrarPeliculaPorID} from "../controllers/peliculaController.js";

const router = express.Router();

router.post("/", postPelicula);     
router.get("/", getPeliculas);   
router.get('/:id', getPeliculaPorID);   
router.delete("/:id", borrarPeliculaPorID);
export default router;