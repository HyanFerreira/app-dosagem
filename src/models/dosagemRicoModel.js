import { prisma } from "../../prisma/client.js";

export async function criarDosagemRico(ensaioId, dadosDosagem) {
  return await prisma.dosagem_rico.create({
    data: {
      ...dadosDosagem,
      ensaio_id: ensaioId
    }
  });
}

export async function buscarDosagensRicoPorEnsaioId(ensaioId) {
  return await prisma.dosagem_rico.findMany({
    where: { ensaio_id: ensaioId }
  });
}
