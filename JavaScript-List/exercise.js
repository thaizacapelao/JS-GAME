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
