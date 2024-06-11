// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Fazendo uma função para que nao seja necessario escrever duas linhas de código toda vez
// que for alterar uma tag e um texto apenas

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1)
}

function verificarChute() {
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Você acertou!');
        }
}

console.log(numeroSecreto);
