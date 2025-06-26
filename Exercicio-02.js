// Exercicio 2 - Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

let numeroSecreto = Math.floor(Math.random()*100) +1 

let tentativas = 0
let chute = 0


let jogarNovamente = true

while(chute !== numeroSecreto){ 

    let chute = parseInt(prompt("Jogo da adivinhação, digite um número de 1 a 100 ?"))
    tentativas++

    if(isNaN(chute)){
        console.log("Por favor, digite um número válido!")
    } else if (chute < numeroSecreto){
        console.log("Mais alto! Tente Novamente.")
    } else if(chute > numeroSecreto){
        console.log("Mais baixo! Tente novamente.")
    } else {
        console.log(`Você acertou!!! O número ${numeroSecreto} em ${tentativas} tentativas. `)
    }
}