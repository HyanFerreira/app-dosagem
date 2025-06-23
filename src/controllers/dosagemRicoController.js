import {
  criarDosagemRico,
  buscarDosagensRicoPorEnsaioId
} from "../models/dosagemRicoModel.js";

export async function criarDosagemRicoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dadosDosagem = req.body;

    const novaDosagem = await criarDosagemRico(ensaioId, dadosDosagem);
    res.status(201).json(novaDosagem);
  } catch (error) {
    console.error("Erro ao criar dosagem rico:", error);
    res.status(500).send("Erro ao criar dosagem rico");
  }
}

export async function buscarDosagensRicoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dosagens = await buscarDosagensRicoPorEnsaioId(ensaioId);

    res.status(200).json(dosagens);
  } catch (error) {
    console.error("Erro ao buscar dosagens rico:", error);
    res.status(500).send("Erro ao buscar dosagens rico");
  }
}
