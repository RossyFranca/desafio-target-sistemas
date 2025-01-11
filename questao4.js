const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}


function calcularRepresentacao(valores) {

    let valorTotal = Object.values(valores).reduce((prev, curr) => prev + curr);

    let response = {}
    for(const estado in valores){
        response[estado] =  ((valores[estado]/ valorTotal) * 100).toFixed(2) + "%"
    }

    return response;
}



let faturamentoJaneiro = calcularRepresentacao(faturamento)
console.log(faturamentoJaneiro);