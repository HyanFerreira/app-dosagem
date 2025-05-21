import express from "express";
import { exibirRico,alterarPesagemRico } from "../controllers/ricoController.js";

const router = express.Router();

router.get("/rico/:id", exibirRico);
router.post("/rico/pesagem/:id", alterarPesagemRico);

export default router;
