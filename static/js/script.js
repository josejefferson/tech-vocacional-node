import questions from './questions.js'

const $question = document.querySelector('.question')
const $answers = document.querySelector('.answers')
const $spnQtd = document.querySelector('.spnQtd')
const $loading = document.querySelector('.loading-container')

const nome = document.getElementById('nome').value
const email = document.getElementById('email').value
const idade = document.getElementById('idade').value
const escola = document.getElementById('escola').value

let currentIndex = 0
const answers = []

function loadQuestion() {
  if (currentIndex < questions.length) {
    $spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`
    const item = questions[currentIndex]
    $answers.innerHTML = ''
    $question.innerHTML = item.question

    item.answers.forEach((answer) => {
      const div = document.createElement('div')

      div.innerHTML = `
      <button class="answer" data-value="${answer.value}">
        ${answer.option}
      </button>
      `

      $answers.appendChild(div)
    })

    document.querySelectorAll('.answer').forEach((item) => {
      item.addEventListener('click', nextQuestion)
    })
  }
}
loadQuestion()

function nextQuestion(e) {
  if (answers.length < questions.length) { // Isso corrige o bug de enviar 2 vezes
    answers.push(e.target.getAttribute('data-value'))
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++
    loadQuestion()
  } else {
    finish()
  }
}

async function finish() {
  const values = answers
  $loading.style.display = 'block' // Mostra o carregamento

  // Enviar os valores selecionados para o Node
  try {
    const response = await fetch('/submit/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values, nome, email, idade, escola })
    })
    const data = await response.json()
    const profissao = data.profissao // Receber o resultado do Node
    const token = data.token // Receber o token do Node
    window.location.href = `/resultado/${profissao}?token=${token}` // Redirecionar para a página de resultado
  } catch (error) {
    $loading.style.display = 'none' // Para o carregamento
    alert('Erro: ' + error.message) // Exibe o erro
    console.error('Erro:', error)
  }
}
