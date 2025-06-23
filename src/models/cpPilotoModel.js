import { prisma } from "../../prisma/client.js";

export async function criarCpPiloto(ensaioId, dadosCp) {
  return await prisma.cp_piloto.create({
    data: {
      ...dadosCp,
      ensaio_id: ensaioId
    }
  });
}

export async function buscarCpPilotoPorEnsaioId(ensaioId) {
  return await prisma.cp_piloto.findMany({
    where: { ensaio_id: ensaioId }
  });
}
