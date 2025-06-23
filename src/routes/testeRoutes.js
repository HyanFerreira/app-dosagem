import express from "express";
import {
  criarTesteController,
  buscarTestesController
} from "../controllers/testeController.js";

const router = express.Router();

router.post("/teste/:id", criarTesteController);
router.get("/teste/:id", buscarTestesController);

export default router;
