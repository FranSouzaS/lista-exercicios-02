// Exercicio 5 - Debounce.
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.


function debounce(fn, delay) {
    let timerId
  
    return function (...args) {
      clearTimeout(timerId)
  
      timerId = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }
  
  function salvarBusca(texto) {
    console.log("Buscando por:", texto);
  }
  
  const buscaDebounce = debounce(salvarBusca, 500);

  buscaDebounce("M")
  buscaDebounce("Ma")
  buscaDebounce("Mar")
  setTimeout(() => buscaDebounce("Maria"), 600)