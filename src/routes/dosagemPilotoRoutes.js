import express from "express";
import {
  criarDosagemPilotoController,
  buscarDosagensPilotoController
} from "../controllers/dosagemPilotoController.js";

const router = express.Router();

router.post("/dosagem/piloto/:id", criarDosagemPilotoController);
router.get("/dosagem/piloto/:id", buscarDosagensPilotoController);

export default router;
