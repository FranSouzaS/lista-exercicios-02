// Exercicio 6 - Memoization.
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.


function memoize(fn) {
    const cache = {}
  
    return function (...args) {
      const chave = JSON.stringify(args)
  
      if (cache[chave] !== undefined) {
        console.log("Usando cache para", chave)
        return cache[chave]
      }
  
      const resultado = fn(...args) 
      cache[chave] = resultado  
      return resultado
    }
  }

  function soma(a, b) {
    console.log("Calculando soma...");
    return a + b;
  }
  
  const somaMemoizada = memoize(soma);
  
  console.log(somaMemoizada(2, 3))
  console.log(somaMemoizada(2, 3))
  console.log(somaMemoizada(4, 1))
  