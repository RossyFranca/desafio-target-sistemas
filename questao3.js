const faturamento = require('./faturamento.json');


function calcularFaturamento(planilhaMensal){
let mediaMensal;
let diasValidos = [];
let menorValor= Number.MAX_VALUE;
let maiorValor= 0;
let numeroDiasMaiorQmedia= 0;
let somaFaturamento = 0;


for( let dia in planilhaMensal){
   // console.log(faturamento[dia])
    let valorFaturamento = planilhaMensal[dia];
    if(valorFaturamento > 0){
        diasValidos.push(valorFaturamento)
        somaFaturamento += valorFaturamento;
        if (valorFaturamento > maiorValor) {
            maiorValor = valorFaturamento;
        }
        if (valorFaturamento < menorValor) {
            menorValor = valorFaturamento;
        }
    }
}

mediaMensal = somaFaturamento / diasValidos.length;
numeroDiasMaiorQmedia = diasValidos.filter(dia => dia > mediaMensal);

  console.log("Dias acima da média de faturamento: " + numeroDiasMaiorQmedia);
  console.log("Maior faturamento em um dia : " + maiorValor)
  console.log("Menor faturamento em um dia: " + menorValor)
}


calcularFaturamento(faturamento.janeiro);


