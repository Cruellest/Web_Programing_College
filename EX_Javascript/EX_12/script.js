let valor = Number(window.prompt("Digite o Valor total da compra:"));
let parcelas =  Number(window.prompt("Digite a Quantidade de parcelas: "));


if(parcelas >1 && parcelas <4){
    document.getElementById("montante").innerHTML = "R$"+((valor*0.03)+valor) + " = " + parcelas + " parcelas de R$" + (((valor*0.03)+valor)/parcelas);

}

else if(parcelas >= 4){

    document.getElementById("montante").innerHTML = "R$"+((valor*0.07)+valor) + " = " + parcelas + " parcelas de R$" + (((valor*0.07)+valor)/parcelas);
}

else{
    document.getElementById("montante").innerHTML = "R$"+valor + " = " + parcelas + " parcela de R$" + valor;
}