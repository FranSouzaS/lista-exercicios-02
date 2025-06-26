// Exercicio 8 - Agrupamento por Propriedade.
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    {cliente:"Maria", total: 100},
    {cliente:"João", total: 150},
    {cliente:"Maria", total: 200},
    {cliente:"João", total: 300},
    {cliente:"Maria", total: 650},
    {cliente:"João", total: 80},
    {cliente:"Maria", total: 20},
]

const soma = vendas.reduce((acumulador,venda) =>{
    const cliente = venda.cliente

    if(!acumulador[cliente]){
        acumulador[cliente] = 0
    }

    acumulador[cliente] += venda.total 

    return acumulador
}, {}, )

console.log(soma)