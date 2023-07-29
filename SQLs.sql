-- DROP TABLE questionarios;
-- DROP TABLE usuarios;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  idade INTEGER NOT NULL,
  escola VARCHAR(100) NOT NULL
);

CREATE TABLE questionarios (
  id SERIAL PRIMARY KEY,
  pergunta1 VARCHAR(20) NOT NULL,
  pergunta2 VARCHAR(20) NOT NULL,
  pergunta3 VARCHAR(20) NOT NULL,
  pergunta4 VARCHAR(20) NOT NULL,
  pergunta5 VARCHAR(20) NOT NULL,
  profissao VARCHAR(40) NOT NULL,
  avaliacao VARCHAR(10),
  token VARCHAR(20) NOT NULL,
  usuario_id INTEGER NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
