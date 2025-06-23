import { prisma } from "../../prisma/client.js";

export async function criarCpRico(ensaioId, dadosCp) {
  return await prisma.cp_rico.create({
    data: {
      ...dadosCp,
      ensaio_id: ensaioId
    }
  });
}

export async function buscarCpRicoPorEnsaioId(ensaioId) {
  return await prisma.cp_rico.findMany({
    where: { ensaio_id: ensaioId }
  });
}
