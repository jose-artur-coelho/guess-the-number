'use strict';

let numeroAleatorio = Math.trunc(Math.random() * 20) + 1;
let pontuacao = 20;
let recorde = 0;

function diminuiPontos() {
  pontuacao--;
  document.querySelector('.pontuacao').textContent = pontuacao;
}
function mensagemTela(mensagem) {
  document.querySelector('.mensagem').textContent = mensagem;
}

function displayAcerto() {
  document.querySelector('.highscore').textContent = recorde;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.numero').style.width = '30rem';
  document.querySelector('.numero').textContent = numeroAleatorio;
}

function displayNormal() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.numero').textContent = '?';
  document.querySelector('.numero').style.width = '15rem';
  document.querySelector('.advinhe').value = '';
}

document.querySelector('.check').addEventListener('click', function () {
  const atual = Number(document.querySelector('.advinhe').value);

  // quando o jogador não digitar nenhum número.
  if (!atual) {
    mensagemTela('Nenhum número foi inserido...');

    // quando o jogador acertar o número.
  } else if (atual === numeroAleatorio) {
    mensagemTela('ACERTOU!!!');
    if (pontuacao > recorde) {
      recorde = pontuacao;
    }
    displayAcerto();

    //quando o jogador digita um número menor ou maior que o certo.
  } else if (atual !== numeroAleatorio) {
    diminuiPontos();
    if (pontuacao > 1) {
      mensagemTela(
        atual > numeroAleatorio
          ? 'Número muito grande...'
          : 'Número muito pequeno...'
      );

      // quando acabam os pontos e o jogador perde.
    } else {
      document.querySelector('.pontuacao').textContent = 0;
      mensagemTela('GAME OVER!');
    }
  }
});

// reinicia o jogo.
document.querySelector('.de-novo').addEventListener('click', function () {
  numeroAleatorio = Math.trunc(Math.random() * 20) + 1;
  console.log(numeroAleatorio);
  pontuacao = 20;
  document.querySelector('.pontuacao').textContent = pontuacao;
  mensagemTela('Comece a advinhar...');
  displayNormal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const atual = Number(document.querySelector('.advinhe').value);

    // quando o jogador não digitar nenhum número.
    if (!atual) {
      mensagemTela('Nenhum número foi inserido...');

      // quando o jogador acertar o número.
    } else if (atual === numeroAleatorio) {
      mensagemTela('ACERTOU!!!');
      if (pontuacao > recorde) {
        recorde = pontuacao;
      }
      displayAcerto();

      //quando o jogador digita um número menor ou maior que o certo.
    } else if (atual !== numeroAleatorio) {
      diminuiPontos();
      if (pontuacao > 1) {
        mensagemTela(
          atual > numeroAleatorio
            ? 'Número muito grande...'
            : 'Número muito pequeno...'
        );

        // quando acabam os pontos e o jogador perde.
      } else {
        document.querySelector('.pontuacao').textContent = 0;
        mensagemTela('GAME OVER!');
      }
    }
  }
});
