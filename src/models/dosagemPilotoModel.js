import { prisma } from "../../prisma/client.js";

export async function criarDosagemPiloto(ensaioId, dadosDosagem) {
  return await prisma.dosagem_piloto.create({
    data: {
      ...dadosDosagem,
      ensaio_id: ensaioId
    }
  });
}

export async function buscarDosagensPilotoPorEnsaioId(ensaioId) {
  return await prisma.dosagem_piloto.findMany({
    where: { ensaio_id: ensaioId }
  });
}

export async function atualizarDosagemPiloto(id, dadosAtualizados) {
  return await prisma.dosagem_piloto.update({
    where: { id: id },
    data: dadosAtualizados
  });
}
