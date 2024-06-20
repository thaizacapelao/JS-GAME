// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Fazendo uma função para que nao seja necessario escrever duas linhas de código toda vez
// que for alterar uma tag e um texto apenas

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function gerarNumeroAleatorio(){
   let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite) {
            listaDeNumerosSorteados = [];
        }
        if(listaDeNumerosSorteados.includes(numeroSorteado)) {
            gerarNumeroAleatorio();
        } else {
            listaDeNumerosSorteados.push(numeroSorteado);
            return numeroSorteado;
        }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Você acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let qntTentativas = `Você descobriu o número Secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', qntTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número Secreto é menor');
            } else {
            exibirTextoNaTela('p', 'O número Secreto é maior');
            }
            // tentativas = tentativas + 1;
            tentativas++;
            limparCampo();
        }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


console.log(numeroSecreto);


function fatorial(n) {
    if (n < 0) {
        throw new Error("O número deve ser não negativo");
    }  

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
