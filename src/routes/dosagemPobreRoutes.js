import express from "express";
import {
  criarDosagemPobreController,
  buscarDosagensPobreController
} from "../controllers/dosagemPobreController.js";

const router = express.Router();

router.post("/dosagem/pobre/:id", criarDosagemPobreController);
router.get("/dosagem/pobre/:id", buscarDosagensPobreController);

export default router;
