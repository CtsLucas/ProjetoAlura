// Acessando o Botão
const botaoCriptografar = document.getElementById('botaoCriptografar')
const botaoDescriptografar = document.getElementById('botaoDescriptografar')

// Adicionando a função de click ao botão Criptografar
botaoCriptografar.addEventListener('click', function botaoCriptografar() {
  let valor,
    valorcripto1,
    valorcripto2,
    valorcripto3,
    valorcripto4,
    valorcripto5

  // Colhendo o valor do Input
  valor = document.getElementById('input-text').value

  // Alterando o valor da string "criptografando".
  valorcripto1 = valor.replace(/e/gi, 'enter')
  valorcripto2 = valorcripto1.replace(/i/gi, 'imes')
  valorcripto3 = valorcripto2.replace(/a/gi, 'ai')
  valorcripto4 = valorcripto3.replace(/o/gi, 'ober')
  valorcripto5 = valorcripto4.replace(/u/gi, 'ufat')

  let textoCriptografado = valorcripto5

  // Pegando o resultado da incriptação e apresentando no input
  document.getElementById('input-resultado').value = textoCriptografado

  // Zerando o valor do input
  valor = document.getElementById('input-text').value = ''
})

// Adicionando a função de click ao botão Descriptografar
botaoDescriptografar.addEventListener('click', function botaoDescriptografar() {
  let valor,
    valorcripto1,
    valorcripto2,
    valorcripto3,
    valorcripto4,
    valorcripto5

  // Colhendo o valor do Input
  valor = document.getElementById('input-text').value

  // Alterando o valor da string "criptografando".
  valorcripto1 = valor.replace(/enter/gi, 'e')
  valorcripto2 = valorcripto1.replace(/imes/gi, 'i')
  valorcripto3 = valorcripto2.replace(/ai/gi, 'a')
  valorcripto4 = valorcripto3.replace(/ober/gi, 'o')
  valorcripto5 = valorcripto4.replace(/ufat/gi, 'u')

  let textoCriptografado = valorcripto5
  // Pegando o resultado da incriptação e apresentando no input
  document.getElementById('input-resultado').value = textoCriptografado

  // Zerando o valor do input
  valor = document.getElementById('input-text').value = ''
})

function copiarTexto() {
  let textoCopiado = document.getElementById('input-resultado')
  textoCopiado.select()
  textoCopiado.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(textoCopiado.value)
}

const fecharTexto = document.getElementById('input-text')
const fechar = document.querySelector('.texto')

fecharTexto.onkeyup = function () {
  fechar.classList.add('disabled')
}
