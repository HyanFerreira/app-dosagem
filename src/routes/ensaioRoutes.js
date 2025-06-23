import express from "express";
import {
  criarEnsaioController,
  listarEnsaiosController,
  buscarEnsaioController,
  atualizarEnsaioController,
  deletarEnsaioController
} from "../controllers/ensaioController.js";

const router = express.Router();

router.post("/ensaios", criarEnsaioController);
router.get("/ensaios", listarEnsaiosController);
router.get("/ensaios/:id", buscarEnsaioController);
router.put("/ensaios/:id", atualizarEnsaioController);
router.delete("/ensaios/:id", deletarEnsaioController);

export default router;
