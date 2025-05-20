-- Criação do banco de dados
# DROP DATABASE IF EXISTS dosagem_db;
CREATE DATABASE dosagem_db;
USE dosagem_db;

-- Tabela principal
# DROP TABLE IF EXISTS ensaios;
CREATE TABLE ensaios (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30),
    piloto FLOAT,
    rico FLOAT,
    pobre FLOAT,
    cp FLOAT,
    pesobrita FLOAT,
    slump FLOAT,
    umidade FLOAT,
    volume FLOAT
);

-- Tabelas de consumo
# DROP TABLE IF EXISTS consumo_piloto;
CREATE TABLE consumo_piloto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    kg_piloto FLOAT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

# DROP TABLE IF EXISTS consumo_pobre;
CREATE TABLE consumo_pobre (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    kg_pobre FLOAT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

# DROP TABLE IF EXISTS consumo_rico;
CREATE TABLE consumo_rico (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    kg_rico FLOAT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

-- Tabelas de CP
# DROP TABLE IF EXISTS cp_piloto;
CREATE TABLE cp_piloto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    resistencia FLOAT,
    idade INT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

# DROP TABLE IF EXISTS cp_pobre;
CREATE TABLE cp_pobre (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    resistencia FLOAT,
    idade INT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

# DROP TABLE IF EXISTS cp_rico;
CREATE TABLE cp_rico (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    resistencia FLOAT,
    idade INT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

-- Tabelas de dosagem
# DROP TABLE IF EXISTS dosagem_piloto;
CREATE TABLE dosagem_piloto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    alfa FLOAT,
    c_unitario FLOAT,
    a_unitario FLOAT,
    b_unitario FLOAT,
    c_massa FLOAT,
    a_massa FLOAT,
    b_massa FLOAT,
    c_acr FLOAT,
    a_acr FLOAT,
    a_massa_umida FLOAT,
    umidade_agregado FLOAT,
    agua FLOAT,
    agua_cimento FLOAT,
    indice INT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

# DROP TABLE IF EXISTS dosagem_pobre;
CREATE TABLE dosagem_pobre (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    alfa FLOAT,
    c_unitario FLOAT,
    a_unitario FLOAT,
    b_unitario FLOAT,
    c_massa FLOAT,
    a_massa FLOAT,
    b_massa FLOAT,
    c_acr FLOAT,
    a_acr FLOAT,
    a_massa_umida FLOAT,
    umidade_agregado FLOAT,
    agua FLOAT,
    agua_cimento FLOAT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

# DROP TABLE IF EXISTS dosagem_rico;
CREATE TABLE dosagem_rico (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    alfa FLOAT,
    c_unitario FLOAT,
    a_unitario FLOAT,
    b_unitario FLOAT,
    c_massa FLOAT,
    a_massa FLOAT,
    b_massa FLOAT,
    c_acr FLOAT,
    a_acr FLOAT,
    a_massa_umida FLOAT,
    umidade_agregado FLOAT,
    agua FLOAT,
    agua_cimento FLOAT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

-- Tabela de resultados
# DROP TABLE IF EXISTS resultados;
CREATE TABLE resultados (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    k1 FLOAT,
    k2 FLOAT,
    k3 FLOAT,
    k4 FLOAT,
    k5 FLOAT,
    k6 FLOAT,
    ensaio_id INT,
    FOREIGN KEY (ensaio_id) REFERENCES ensaios(id) ON DELETE CASCADE
);

-- Tabela de teste
# DROP TABLE IF EXISTS teste;
CREATE TABLE teste (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    a FLOAT,
    cu FLOAT,
    au FLOAT,
    bu FLOAT,
    cm FLOAT,
    am FLOAT,
    bm FLOAT,
    cacr FLOAT,
    aacr FLOAT,
    teste_id INT,
    FOREIGN KEY (teste_id) REFERENCES ensaios(id) ON DELETE CASCADE
);
