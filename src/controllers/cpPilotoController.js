import {
  criarCpPiloto,
  buscarCpPilotoPorEnsaioId
} from "../models/cpPilotoModel.js";

export async function criarCpPilotoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dadosCp = req.body;

    const novoCp = await criarCpPiloto(ensaioId, dadosCp);
    res.status(201).json(novoCp);
  } catch (error) {
    console.error("Erro ao criar Cp piloto:", error);
    res.status(500).send("Erro ao criar Cp piloto");
  }
}

export async function buscarCpPilotoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const cps = await buscarCpPilotoPorEnsaioId(ensaioId);

    res.status(200).json(cps);
  } catch (error) {
    console.error("Erro ao buscar Cp piloto:", error);
    res.status(500).send("Erro ao buscar Cp piloto");
  }
}
