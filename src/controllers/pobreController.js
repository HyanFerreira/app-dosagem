import { prisma } from "../../prisma/client.js";
import { obterConsumoPobrePorEnsaio } from "../models/consumoPobreModel.js";

export async function exibirPobre(req, res) {
  const ensaioId = parseInt(req.params.id);

  try {
    const ensaio_salvo = await prisma.ensaios.findUnique({
      where: { id: ensaioId }
    });

    if (!ensaio_salvo) return res.status(404).send("Ensaio não encontrado");

    const consumoPobre = await obterConsumoPobrePorEnsaio(ensaioId);

    const { slump, piloto: m, pobre: mp } = ensaio_salvo;

    res.render("pobre", {
      ensaio_salvo,
      id: ensaioId,
      slump,
      m,
      mp,
      c: consumoPobre
    });
  } catch (error) {
    console.error("Erro ao carregar dados do pobre:", error);
    res.status(500).send("Erro interno ao buscar dados do ensaio");
  }
}

export async function alterarPesagemPobre(req, res) {
  const ensaioId = parseInt(req.params.id);
  const novaPesagem = parseFloat(req.body.pesagem_pobre);

  try {
    await atualizarPesagemPobre(ensaioId, novaPesagem);
    res.redirect(`/pobre/${ensaioId}`);
  } catch (error) {
    console.error("Erro ao atualizar pesagem do pobre:", error);
    res.status(500).send("Erro ao atualizar pesagem do pobre");
  }
}
