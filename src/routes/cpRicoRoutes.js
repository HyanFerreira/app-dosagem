import express from "express";
import {
  criarCpRicoController,
  buscarCpRicoController
} from "../controllers/cpRicoController.js";

const router = express.Router();

router.post("/cp/rico/:id", criarCpRicoController);
router.get("/cp/rico/:id", buscarCpRicoController);

export default router;
