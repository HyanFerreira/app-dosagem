import { prisma } from "../../prisma/client.js";

export async function obterConsumoPobrePorEnsaio(ensaioId) {
  return await prisma.consumo_pobre.findFirst({
    where: { ensaio_id: ensaioId }
  });
}

export async function atualizarPesagemPobre(ensaioId, novaPesagem) {
  return await prisma.consumo_pobre.updateMany({
    where: { ensaio_id: ensaioId },
    data: { kg_pobre: novaPesagem }
  });
}
