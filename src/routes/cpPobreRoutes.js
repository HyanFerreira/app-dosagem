import express from "express";
import {
  criarCpPobreController,
  buscarCpPobreController
} from "../controllers/cpPobreController.js";

const router = express.Router();

router.post("/cp/pobre/:id", criarCpPobreController);
router.get("/cp/pobre/:id", buscarCpPobreController);

export default router;
