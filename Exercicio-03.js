// Exercicio 3 - Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.


let texto = "olá mundo bom dia mundo dia "

let palavras = texto.split(" ") 

let palavrasUnicas = []

for (let i = 0; i < palavras.length; i++) {
  const palavra = palavras[i]
  let contador = 0

  for (let j = 0; j < palavras.length; j++) {
    if (palavras[j] === palavra) {
      contador++
    }
  }

  if (contador === 1) {
    palavrasUnicas.push(palavra)
  }
}

console.log(palavrasUnicas)