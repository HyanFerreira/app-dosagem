import {
  criarDosagemPiloto,
  buscarDosagensPilotoPorEnsaioId
} from "../models/dosagemPilotoModel.js";

export async function criarDosagemPilotoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dadosDosagem = req.body;

    const novaDosagem = await criarDosagemPiloto(ensaioId, dadosDosagem);
    res.status(201).json(novaDosagem);
  } catch (error) {
    console.error("Erro ao criar dosagem piloto:", error);
    res.status(500).send("Erro ao criar dosagem piloto");
  }
}

export async function buscarDosagensPilotoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dosagens = await buscarDosagensPilotoPorEnsaioId(ensaioId);

    res.status(200).json(dosagens);
  } catch (error) {
    console.error("Erro ao buscar dosagens piloto:", error);
    res.status(500).send("Erro ao buscar dosagens piloto");
  }
}
