const btn1 = document.querySelector('#green')
const btn2 = document.querySelector('#red')
const token = document.querySelector('#token').value
let clicado = false
let opiniao = null

function myFunctionRed() {
  if (!clicado) {
    btn1.classList.remove('green')
    btn1.onclick = null // Remove o evento de clique do botão vermelho
    btn2.classList.toggle('red')
    clicado = true
    opiniao = 'dislike' // Inverte para "dislike" quando o botão vermelho é clicado
    mostrarOpiniao()
    enviar_opiniao(opiniao)
  }
}

function myFunctionGreen() {
  if (!clicado) {
    btn2.classList.remove('red')
    btn2.onclick = null // Remove o evento de clique do botão verde
    btn1.classList.toggle('green')
    clicado = true
    opiniao = 'like' // Inverte para "like" quando o botão verde é clicado
    mostrarOpiniao()
    enviar_opiniao(opiniao)
  }
}

function mostrarOpiniao() {
  console.log(opiniao)
}

/*
function enviarOpiniao(opiniao) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/resultado", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log("Opinião enviada com sucesso!");
      }
  };
  xhr.send(JSON.stringify({opiniao}));
}*/

function enviar_opiniao(opiniao) {
  // Enviar os valores selecionados para o Python
  fetch('/receber_opiniao/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ opiniao, token })
  })
}
