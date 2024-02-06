//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTryAgain = screen2.querySelector("#btnTryAgain")
var phraseNumber = Math.round(Math.random() * 10)

//Eventos
screen1.addEventListener('click', handleClick)
btnTryAgain.addEventListener('click', handleResetClick)

//fuções
function handleClick() {
  if(screen2.classList.contains('hide')) {
    switchPhrase()
    toggleScreen()   
  }   
}

function handleResetClick() {
  toggleScreen()
  phraseNumber = Math.round(Math.random() * 10)
  console.log(phraseNumber)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function switchPhrase() {  
  switch (phraseNumber){
    case 0:
      screen2.querySelector("p").innerText = "A vida trará coisas boas se tiver paciência.";
      break;
    case 1:
      screen2.querySelector("p").innerText = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.";
      break;
    case 2:
      screen2.querySelector("p").innerText = "Não compense na ira o que lhe falta na razão.";
      break;
    case 3:
      screen2.querySelector("p").innerText = "Defeitos e virtudes são apenas dois lados da mesma moeda.";
      break;
    case 4:
      screen2.querySelector("p").innerText = "A maior de todas as torres começa no solo.";
      break;
    case 5:
      screen2.querySelector("p").innerText = "Não há que ser forte. Há que ser flexível.";
      break;
    case 6:
      screen2.querySelector("p").innerText = "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?";
      break;
    case 7:
      screen2.querySelector("p").innerText = "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.";
      break;
    case 8:
      screen2.querySelector("p").innerText = "A juventude não é uma época da vida, é um estado de espírito.";
      break;
    case 9:
      screen2.querySelector("p").innerText = "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.";
      break;
    case 10:
      screen2.querySelector("p").innerText = "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.";
      break;   
  }
}