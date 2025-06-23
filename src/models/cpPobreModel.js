import { prisma } from "../../prisma/client.js";

export async function criarCpPobre(ensaioId, dadosCp) {
  return await prisma.cp_pobre.create({
    data: {
      ...dadosCp,
      ensaio_id: ensaioId
    }
  });
}

export async function buscarCpPobrePorEnsaioId(ensaioId) {
  return await prisma.cp_pobre.findMany({
    where: { ensaio_id: ensaioId }
  });
}
