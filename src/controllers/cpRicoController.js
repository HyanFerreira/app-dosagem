import { criarCpRico, buscarCpRicoPorEnsaioId } from "../models/cpRicoModel.js";

export async function criarCpRicoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dadosCp = req.body;

    const novoCp = await criarCpRico(ensaioId, dadosCp);
    res.status(201).json(novoCp);
  } catch (error) {
    console.error("Erro ao criar Cp rico:", error);
    res.status(500).send("Erro ao criar Cp rico");
  }
}

export async function buscarCpRicoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const cps = await buscarCpRicoPorEnsaioId(ensaioId);

    res.status(200).json(cps);
  } catch (error) {
    console.error("Erro ao buscar Cp rico:", error);
    res.status(500).send("Erro ao buscar Cp rico");
  }
}
