import {
  criarResultado,
  buscarResultadosPorEnsaioId
} from "../models/resultadosModel.js";

export async function criarResultadoController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const dadosResultado = req.body;

    const novoResultado = await criarResultado(ensaioId, dadosResultado);
    res.status(201).json(novoResultado);
  } catch (error) {
    console.error("Erro ao criar Resultado:", error);
    res.status(500).send("Erro ao criar Resultado");
  }
}

export async function buscarResultadosController(req, res) {
  try {
    const ensaioId = parseInt(req.params.id);
    const resultados = await buscarResultadosPorEnsaioId(ensaioId);

    res.status(200).json(resultados);
  } catch (error) {
    console.error("Erro ao buscar Resultados:", error);
    res.status(500).send("Erro ao buscar Resultados");
  }
}
