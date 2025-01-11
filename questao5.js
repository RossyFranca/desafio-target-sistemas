let meuNome = "Rossywan";



function inverteString(palavra){
    let novaString = "";

    const caracteres = palavra.split('');
  //  console.log(caracteres)
    
    
    for (let i = caracteres.length - 1; i >= 0; i--) {
    
        novaString += caracteres[i];
    }

    return novaString;

}

let palavraInvertida = inverteString(meuNome)
console.log(palavraInvertida)


