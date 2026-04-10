import express from "express";
import { postFuncion, getFunciones} from "../controllers/funcionController.js";

const router = express.Router();

router.post("/", postFuncion);
router.get("/", getFunciones);

export default router;