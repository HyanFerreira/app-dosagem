import { prisma } from "../../prisma/client.js";
import { obterConsumoRicoPorEnsaio } from "../models/consumoRicoModel.js";

export async function exibirRico(req, res) {
  const ensaioId = parseInt(req.params.id);

  try {
    const ensaio_salvo = await prisma.ensaios.findUnique({
      where: { id: ensaioId }
    });

    if (!ensaio_salvo) return res.status(404).send("Ensaio não encontrado");

    const consumoRico = await obterConsumoRicoPorEnsaio(ensaioId);

    const { slump, piloto: m, rico: mr } = ensaio_salvo;

    // Renderizando a view rico.html (usando template engine configurado, tipo EJS ou Pug)
    res.render("rico", {
      ensaio_salvo,
      id: ensaioId,
      slump,
      m,
      mr,
      c: consumoRico
    });
  } catch (error) {
    console.error("Erro ao carregar dados do rico:", error);
    res.status(500).send("Erro interno ao buscar dados do ensaio");
  }
}

export async function alterarPesagemRico(req, res) {
  const ensaioId = parseInt(req.params.id);
  const novaPesagem = parseFloat(req.body.pesagem_rico);

  try {
    await atualizarPesagemRico(ensaioId, novaPesagem);
    res.redirect(`/rico/${ensaioId}`);
  } catch (error) {
    console.error("Erro ao atualizar pesagem do rico:", error);
    res.status(500).send("Erro ao atualizar pesagem do rico");
  }
}
