//Exercicio 1:


// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do desafio';

// function botaoClick() {
//     alert('Eu amo JS');
// }

//Exercicio 2:

// function cidadePrompt() {
//     let cidade = prompt('Me diga um nome de uma cidade do Brasil');
//     console.log(cidade);
//     if(cidade != null) {
//         alert(`Estive em ${cidade} e lembrei de você!`)
//     } else {
//         alert('Digite um nome de cidade');
//     }
// }

//Exercicio 3:

// function somaPrompt() {
//     let numero1 = parseInt(prompt('Digite o primeiro número inteiro'));
//     let numero2 = parseInt(prompt('Digite o segundo número inteiro'));

//  if (!isNaN(numero1) && !isNaN(numero2)) {
//     let soma = numero1 + numero2;
//     alert(`A soma do número ${numero1} e ${numero2} é ${soma}.`)
//  } else {
//     alert('Você deve digitar dois números inteiros válidos.')
//  };
 
// }


//HTML REFERENTE:

// <!DOCTYPE html>
// <html lang="pt-br">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="https://code.responsivevoice.org/responsivevoice.js"></script>
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
//         rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
//     <title>JS Game</title>
// </head>

// <body>

//     <div class="container">
//         <div class="container__conteudo">
//             <div class="container__informacoes">
//                 <div class="container__texto">
//                     <h1>Adivinhe o <span class="container__texto-azul">numero secreto</span></h1>
//                     <p class="texto__paragrafo">Escolha um número entre 1 a 10</p>
//                 </div>
//                 <input type="number" min="1" max="10" class="container__input">
//                 <div class="chute container__botoes">
//                     <button onclick="botaoClick()" class="container__botao">Click</button>
//                     <button onclick="cidadePrompt()" id="cidadeBotao" class="container__botao">Cidade</button>
//                     <button onclick="somaPrompt()" id="somaBotao" class="container__botao">Soma</button>
//                 </div>
//             </div>
//             <img src="./img/ia.png" alt="Uma pessoa olhando para a esquerda" class="container__imagem-pessoa" />
//         </div>
//     </div>

//     <script src="app.js" defer></script>
// </body>

// </html>

//Desafios:


// Criar uma função que exibe "Olá, mundo!" no console.

// E Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// let nome = 'Thaiza';

// function olaMundo() {
//     console.log(`Olá ${nome}`);
// }


// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// let numero = 8;

// function dobrarNumero(){
//     let numeroDobrado = numero * 2
//     alert(`O numero é ${numeroDobrado}`)
//     return numeroDobrado;
// }

// dobrarNumero();


//  Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function mediaDe3Valores(num1, num2, num3) {
//     let media = num1 + num2 + num3 / 3;
//     return media;
// }

// console.log(`A média dos valores é ${mediaDe3Valores(12, 22, 43)}`);


//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function maiorNumero(num1, num2) {
//     if(num1 > num2) {
//         console.log(`O maior número é ${num1}`);
//     } else{
//         console.log(`O maior número é ${num2}`);
//     }
// }

// function MaiorNumero2(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function multiplicador(numero) {
//     return numero * numero;
// }

// console.log(multiplicador(8));


//Crie uma função que calcule o índice de massa corporal

// function iMC(peso, altura) {
//     return peso / (altura * altura);
// }

// console.log(iMC(58, 1.63));
