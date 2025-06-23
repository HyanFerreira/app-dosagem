import { prisma } from "../../prisma/client.js";

export async function criarEnsaio(dados) {
  return await prisma.ensaios.create({
    data: dados
  });
}

export async function buscarEnsaioPorId(id) {
  return await prisma.ensaios.findUnique({
    where: { id: id },
    include: {
      consumo_piloto: true,
      consumo_rico: true,
      consumo_pobre: true
    }
  });
}

export async function buscarTodosEnsaios() {
  return await prisma.ensaios.findMany();
}

export async function atualizarEnsaio(id, dadosAtualizados) {
  return await prisma.ensaios.update({
    where: { id: id },
    data: dadosAtualizados
  });
}

export async function deletarEnsaio(id) {
  return await prisma.ensaios.delete({
    where: { id: id }
  });
}
