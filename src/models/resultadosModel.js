import { prisma } from "../../prisma/client.js";

export async function criarResultado(ensaioId, dadosResultado) {
  return await prisma.resultados.create({
    data: {
      ...dadosResultado,
      ensaio_id: ensaioId
    }
  });
}

export async function buscarResultadosPorEnsaioId(ensaioId) {
  return await prisma.resultados.findMany({
    where: { ensaio_id: ensaioId }
  });
}
