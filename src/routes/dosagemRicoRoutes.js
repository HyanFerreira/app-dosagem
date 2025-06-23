import express from "express";
import {
  criarDosagemRicoController,
  buscarDosagensRicoController
} from "../controllers/dosagemRicoController.js";

const router = express.Router();

router.post("/dosagem/rico/:id", criarDosagemRicoController);
router.get("/dosagem/rico/:id", buscarDosagensRicoController);

export default router;
