-- Inserindo 1 Ensaio
INSERT INTO ensaios (nome, piloto, rico, pobre, cp, pesobrita, slump, umidade, volume)
VALUES ('Traço de Teste A', 1.5, 2.0, 1.2, 10, 1450, 8.0, 2.5, 1.0);

-- Pegando o ID do ensaio criado (assumindo que é 1)
SET @ensaio_id := LAST_INSERT_ID();

-- Consumo
INSERT INTO consumo_piloto (kg_piloto, ensaio_id) VALUES (300.5, @ensaio_id);
INSERT INTO consumo_rico (kg_rico, ensaio_id) VALUES (340.0, @ensaio_id);
INSERT INTO consumo_pobre (kg_pobre, ensaio_id) VALUES (290.2, @ensaio_id);

-- CP (corpos de prova)
INSERT INTO cp_piloto (resistencia, idade, ensaio_id) VALUES (25.6, 7, @ensaio_id);
INSERT INTO cp_rico (resistencia, idade, ensaio_id) VALUES (30.2, 7, @ensaio_id);
INSERT INTO cp_pobre (resistencia, idade, ensaio_id) VALUES (20.8, 7, @ensaio_id);

-- Dosagens
INSERT INTO dosagem_piloto (
    alfa, c_unitario, a_unitario, b_unitario,
    c_massa, a_massa, b_massa,
    c_acr, a_acr, a_massa_umida,
    umidade_agregado, agua, agua_cimento, indice, ensaio_id
) VALUES (
    0.55, 300, 900, 600,
    295, 890, 590,
    0.35, 0.65, 910,
    2.5, 170, 0.57, 1, @ensaio_id
);

INSERT INTO dosagem_rico (
    alfa, c_unitario, a_unitario, b_unitario,
    c_massa, a_massa, b_massa,
    c_acr, a_acr, a_massa_umida,
    umidade_agregado, agua, agua_cimento, ensaio_id
) VALUES (
    0.60, 320, 920, 620,
    315, 910, 610,
    0.34, 0.66, 935,
    2.5, 180, 0.56, @ensaio_id
);

INSERT INTO dosagem_pobre (
    alfa, c_unitario, a_unitario, b_unitario,
    c_massa, a_massa, b_massa,
    c_acr, a_acr, a_massa_umida,
    umidade_agregado, agua, agua_cimento, ensaio_id
) VALUES (
    0.50, 280, 870, 580,
    275, 860, 570,
    0.36, 0.64, 890,
    2.5, 160, 0.57, @ensaio_id
);

-- Resultados
INSERT INTO resultados (k1, k2, k3, k4, k5, k6, ensaio_id)
VALUES (1.1, 0.95, 1.03, 0.98, 1.02, 0.97, @ensaio_id);

-- Teste
INSERT INTO teste (
    a, cu, au, bu,
    cm, am, bm,
    cacr, aacr, teste_id
) VALUES (
    1.0, 300, 900, 600,
    295, 890, 590,
    0.35, 0.65, @ensaio_id
);
