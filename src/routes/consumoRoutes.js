import express from "express";
import { atualizarPesagemController } from "../controllers/consumoController.js";

const router = express.Router();

router.put("/dosagem/pesagem/:id", atualizarPesagemController);

export default router;
