import { prisma } from "../../prisma/client.js";

export async function criarTeste(testeId, valorA) {
  return await prisma.teste.create({
    data: {
      a: valorA,
      teste_id: testeId
    }
  });
}

export async function buscarTestesPorEnsaioId(testeId) {
  return await prisma.teste.findMany({
    where: { teste_id: testeId }
  });
}

export async function atualizarTeste(id, dadosAtualizados) {
  return await prisma.teste.update({
    where: { id: id },
    data: dadosAtualizados
  });
}
