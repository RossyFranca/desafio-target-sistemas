function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let resultado = 0;
  
    while (resultado <= numero) {
      if (resultado === numero) {
        return true;
      }
      resultado = a + b;
      a = b;
      b = resultado;
    }
  
    return false;
  }
  

  let numero = 4;
  if (pertenceFibonacci(numero)) {
    console.log(numero + ' pertence à sequência de Fibonacci.');
  } else {
    console.log(numero + ' não pertence à sequência de Fibonacci.');
  }