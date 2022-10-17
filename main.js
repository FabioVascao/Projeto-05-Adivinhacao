// Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enter)
// Funções
function handleTryClick(event) {
  event.preventDefault() /* Não faça o padrão */
  const inputNumber = document.querySelector("#inputNumber")
  if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    alert("Número inválido. Digite um número entre 0 e 10!")
  }
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas `
  }
  inputNumber.value = ""
  xAttempts++
  randomNumber = Math.round(Math.random() * 10)
}
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
}
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
function enter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide'))
  handleResetClick()
}