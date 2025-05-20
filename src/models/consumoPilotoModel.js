import { prisma } from "../../prisma/client.js";

export async function atualizarPesagem(ensaioId, novaPesagem) {
  return await prisma.consumo_piloto.updateMany({
    where: { ensaio_id: ensaioId },
    data: { kg_piloto: novaPesagem }
  });
}
