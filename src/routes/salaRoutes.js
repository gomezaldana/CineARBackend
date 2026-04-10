import express from "express";
import { postSala, getSalas, getSalaPorID } from "../controllers/salaController.js";

const router = express.Router();

router.post("/", postSala);
router.get("/", getSalas);
router.get("/:id", getSalaPorID);

export default router;