// Exercicio 9 - Conversão Entre Formatos.
// Escreva duas funções:

// - paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// - objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

let pares = [["nome", "maria"], ["idade", 30], ["sexo", "feminino"]]
let obj = {nome: "maria", idade: 30, sexo: "feminino"}

function paresParaObjeto(pares){
    const obj = {}

    pares.forEach(([chave, valor]) =>{
        obj[chave] = valor
    })

    return obj
}

console.log(paresParaObjeto(pares))



function objetoParaPares(obj){
    return Object.entries(obj)
}

console.log(objetoParaPares(obj))