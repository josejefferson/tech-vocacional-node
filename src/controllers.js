const sql = require('./db')

async function inserirUsuario(nome, email, idade, escola) {
  const sqlResultado = await sql`INSERT INTO usuarios ${sql({ nome, email, idade, escola })} RETURNING id`
  const usuarioID = sqlResultado[0].id

  return usuarioID
}

async function inserirResposta(values, profissao, usuarioID) {
  const questionario = {
    pergunta1: values[0],
    pergunta2: values[1],
    pergunta3: values[2],
    pergunta4: values[3],
    pergunta5: values[4],
    profissao: profissao,
    usuario_id: usuarioID,
    token: String(Math.random())
  }

  const sqlResultado = await sql`INSERT INTO questionarios ${sql(questionario)} RETURNING token`
  const token = sqlResultado[0].token

  return token
}

async function definirOpiniao(avaliacao, token) {
  await sql`UPDATE questionarios SET ${sql({ avaliacao }, 'avaliacao')} WHERE token = ${token} AND avaliacao IS NULL`
}

exports.inserirUsuario = inserirUsuario
exports.inserirResposta = inserirResposta
exports.definirOpiniao = definirOpiniao
