import { atualizarPesagem } from "../models/consumoPilotoModel.js";

export async function atualizarPesagemController(req, res) {
  const ensaioId = parseInt(req.params.id);
  const novaPesagem = parseFloat(req.body.pesagem_piloto);

  try {
    await atualizarPesagem(ensaioId, novaPesagem);
    res.redirect(`/dosagem/pesagem/${ensaioId}`);
  } catch (error) {
    console.error("Erro ao atualizar pesagem:", error);
    res.status(500).send("Erro ao atualizar pesagem");
  }
}
