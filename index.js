const { port } = require('./src/env')
const { inserirUsuario, inserirResposta, definirOpiniao } = require('./src/controllers')
const realizar_teste = require('./src/teste')
const PROFISSOES = require('./src/profissoes')
const morgan = require('morgan')
const express = require('express')
const app = express()
process.on('uncaughtException', console.error)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('static'))
app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.set('views', './templates')

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`)
})

// Rotas

app.post('/formulario', (req, res) => {
  const { nome, email, idade, escola } = req.body
  res.render('questionario', { nome, email, idade, escola })
})

app.post('/submit', async (req, res) => {
  const { values, nome, email, idade, escola } = req.body
  const profissao = realizar_teste(values)
  const usuarioID = await inserirUsuario(nome, email, idade, escola)
  const token = await inserirResposta(values, profissao, usuarioID)

  res.json({ profissao, token })
})

app.get('/resultado/:profissao', (req, res) => {
  const token = req.query.token
  const profissao = req.params.profissao
  const dadosDaProfissao = PROFISSOES[profissao]

  if (!dadosDaProfissao) return res.send('Profissão não existe')

  const { descricao, imagem, link } = dadosDaProfissao
  res.render('resultado', { profissao, descricao, imagem, link, token })
})

app.post('/receber_opiniao/', async (req, res) => {
  const { opiniao, token } = req.body
  await definirOpiniao(opiniao, token)
  res.sendStatus(200)
})
