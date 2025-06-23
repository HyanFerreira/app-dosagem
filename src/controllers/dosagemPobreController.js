import {
  criarDosagemPobre,
  buscarDosagensPobrePorEnsaioId
} from "../models/dosagemPobreModel.js";

export async function criarDosagemPobreController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dadosDosagem = req.body;

    const novaDosagem = await criarDosagemPobre(ensaioId, dadosDosagem);
    res.status(201).json(novaDosagem);
  } catch (error) {
    console.error("Erro ao criar dosagem pobre:", error);
    res.status(500).send("Erro ao criar dosagem pobre");
  }
}

export async function buscarDosagensPobreController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dosagens = await buscarDosagensPobrePorEnsaioId(ensaioId);

    res.status(200).json(dosagens);
  } catch (error) {
    console.error("Erro ao buscar dosagens pobre:", error);
    res.status(500).send("Erro ao buscar dosagens pobre");
  }
}
