import express from "express";
import {
  criarCpPilotoController,
  buscarCpPilotoController
} from "../controllers/cpPilotoController.js";

const router = express.Router();

router.post("/cp/piloto/:id", criarCpPilotoController);
router.get("/cp/piloto/:id", buscarCpPilotoController);

export default router;
