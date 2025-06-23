import express from "express";
import {
  criarResultadoController,
  buscarResultadosController
} from "../controllers/resultadosController.js";

const router = express.Router();

router.post("/resultados/:id", criarResultadoController);
router.get("/resultados/:id", buscarResultadosController);

export default router;
