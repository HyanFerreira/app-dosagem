import { criarTeste, buscarTestesPorEnsaioId } from "../models/testeModel.js";

export async function criarTesteController(req, res) {
  try {
    const testeId = parseInt(req.params.id);
    const valorA = parseFloat(req.body.valor_a);

    const novoTeste = await criarTeste(testeId, valorA);
    res.status(201).json(novoTeste);
  } catch (error) {
    console.error("Erro ao criar teste:", error);
    res.status(500).send("Erro ao criar teste");
  }
}

export async function buscarTestesController(req, res) {
  try {
    const testeId = parseInt(req.params.id);
    const testes = await buscarTestesPorEnsaioId(testeId);

    res.status(200).json(testes);
  } catch (error) {
    console.error("Erro ao buscar testes:", error);
    res.status(500).send("Erro ao buscar testes");
  }
}
