import { prisma } from "../../prisma/client.js";

export async function obterConsumoRicoPorEnsaio(ensaioId) {
  return await prisma.consumo_rico.findFirst({
    where: { ensaio_id: ensaioId }
  });
}

export async function atualizarPesagemRico(ensaioId, novaPesagem) {
  return await prisma.consumo_rico.updateMany({
    where: { ensaio_id: ensaioId },
    data: { kg_rico: novaPesagem }
  });
}
