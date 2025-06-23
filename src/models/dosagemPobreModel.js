import { prisma } from "../../prisma/client.js";

export async function criarDosagemPobre(ensaioId, dadosDosagem) {
  return await prisma.dosagem_pobre.create({
    data: {
      ...dadosDosagem,
      ensaio_id: ensaioId
    }
  });
}

export async function buscarDosagensPobrePorEnsaioId(ensaioId) {
  return await prisma.dosagem_pobre.findMany({
    where: { ensaio_id: ensaioId }
  });
}
