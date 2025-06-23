import {
  criarEnsaio,
  buscarEnsaioPorId,
  buscarTodosEnsaios,
  atualizarEnsaio,
  deletarEnsaio
} from "../models/ensaioModel.js";

export async function criarEnsaioController(req, res) {
  try {
    const ensaio = await criarEnsaio(req.body);
    res.status(201).json(ensaio);
  } catch (error) {
    console.error("Erro ao criar ensaio:", error);
    res.status(500).send("Erro ao criar ensaio");
  }
}

export async function listarEnsaiosController(req, res) {
  try {
    const ensaios = await buscarTodosEnsaios();
    res.status(200).json(ensaios);
  } catch (error) {
    console.error("Erro ao buscar ensaios:", error);
    res.status(500).send("Erro ao buscar ensaios");
  }
}

export async function buscarEnsaioController(req, res) {
  try {
    const ensaio = await buscarEnsaioPorId(parseInt(req.params.id));
    if (!ensaio) return res.status(404).send("Ensaio não encontrado");
    res.status(200).json(ensaio);
  } catch (error) {
    console.error("Erro ao buscar ensaio:", error);
    res.status(500).send("Erro ao buscar ensaio");
  }
}

export async function atualizarEnsaioController(req, res) {
  try {
    const ensaio = await atualizarEnsaio(parseInt(req.params.id), req.body);
    res.status(200).json(ensaio);
  } catch (error) {
    console.error("Erro ao atualizar ensaio:", error);
    res.status(500).send("Erro ao atualizar ensaio");
  }
}

export async function deletarEnsaioController(req, res) {
  try {
    await deletarEnsaio(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar ensaio:", error);
    res.status(500).send("Erro ao deletar ensaio");
  }
}
