import express from "express";
import { exibirPobre, alterarPesagemPobre } from "../controllers/pobreController.js";

const router = express.Router();

router.get("/pobre/:id", exibirPobre);
router.post("/pobre/pesagem/:id", alterarPesagemPobre);

export default router;
