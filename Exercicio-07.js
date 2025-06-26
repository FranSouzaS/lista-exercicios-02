// Exercicio 7 - Mapeamento e Ordenação.
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let produtos = [
    {nome: "arroz", preco: 20},
    {nome: "feijão", preco: 12},
    {nome: "açucar", preco: 15},
    {nome: "óleo", preco: 7}
]

function mapeamentoOrdenacao(produtos){
    return produtos
    .slice()
    .sort((a,b) => a.preco - b.preco)
    .map(produto => produto.nome)

}

const nomesOrdenados = mapeamentoOrdenacao(produtos)
console.log(nomesOrdenados)