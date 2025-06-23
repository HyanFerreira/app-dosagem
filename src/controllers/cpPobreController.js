import {
  criarCpPobre,
  buscarCpPobrePorEnsaioId
} from "../models/cpPobreModel.js";

export async function criarCpPobreController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dadosCp = req.body;

    const novoCp = await criarCpPobre(ensaioId, dadosCp);
    res.status(201).json(novoCp);
  } catch (error) {
    console.error("Erro ao criar Cp pobre:", error);
    res.status(500).send("Erro ao criar Cp pobre");
  }
}

export async function buscarCpPobreController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const cps = await buscarCpPobrePorEnsaioId(ensaioId);

    res.status(200).json(cps);
  } catch (error) {
    console.error("Erro ao buscar Cp pobre:", error);
    res.status(500).send("Erro ao buscar Cp pobre");
  }
}
