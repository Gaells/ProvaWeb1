const bola = document.getElementById("bola");
const btnIniciar = document.getElementById("btn");
const pontos = document.getElementById("points");

let tamanhoBola = 100;
let frequenciaTrocaPosicao = 1000; // 1 vez por segundo
let pontuacao = 0;
let tempoRestante = 20;

function atualizarTamanhoBola() {
  bola.style.width = tamanhoBola + "px";
  bola.style.height = tamanhoBola + "px";
}

function atualizarPontuacao() {
  pontos.textContent = pontuacao;
}

function atualizarTempoRestante() {
  const segundos = tempoRestante < 10 ? "0" + tempoRestante : tempoRestante;
  document.getElementById("seg").textContent = segundos;
}

function moverBola() {
  const divPaiWidth = 500;
  const divPaiHeight = 500;
  const posX = Math.floor(Math.random() * (divPaiWidth - tamanhoBola));
  const posY = Math.floor(Math.random() * (divPaiHeight - tamanhoBola));

  bola.style.transform = `translate(${posX}px, ${posY}px)`;
}


function atualizarJogo() {
  tamanhoBola *= 0.9;
  atualizarTamanhoBola();

  frequenciaTrocaPosicao *= 0.9;

  pontuacao++;
  atualizarPontuacao();

  moverBola();
}

function iniciarJogo() {
  alert("O jogo começou");
  btnIniciar.disabled = true;

  atualizarTamanhoBola();

  atualizarPontuacao();

  atualizarTempoRestante();

  moverBola();

  const temporizador = setInterval(() => {
    tempoRestante--;

    if (tempoRestante === 0) {
      clearInterval(temporizador);
      btnIniciar.disabled = false;
      alert("Fim de jogo! Sua pontuação final é: " + pontuacao);
    } else {
      atualizarTempoRestante();
    }
  }, 1000);
}

btnIniciar.addEventListener("click", iniciarJogo);

bola.addEventListener("click", atualizarJogo);

