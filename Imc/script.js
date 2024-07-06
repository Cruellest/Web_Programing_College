/**
 * Calculadora de IMC
 * Para realizar o cálculo do IMC, é necessário informar o nome, a altura e o peso.
 * O cálculo é feito da seguinte forma: peso / (altura * altura)
 *
 * O resultado é classificado da seguinte forma:
 *  - Abaixo do peso: IMC menor que 18,5
 *  - Peso ideal: IMC entre 18,5 e 24,9
 *  - Levemente acima do peso: IMC entre 25 e 29,9
 *  - Obesidade grau I: IMC entre 30 e 34,9
 *  - Obesidade grau II: IMC entre 35 e 39,9
 *  - Obesidade grau III: IMC maior que 40
 *
 *  https://abeso.org.br/obesidade-e-sindrome-metabolica/calculadora-imc/
 */
var nome = document.getElementById("nome");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");
var resultado = document.getElementById("resultado")


function calcular(){

    let imc = (peso.value/(altura.value*altura.value)).toFixed(2);
    let string;

    if(imc <= 18.5){
        string = "IMC abaixo do normal"
    }

    else if(imc <= 24.9){
        string = "IMC normal"
    }

    else if(imc <= 29.9){
        string = "IMC Levemente acima do peso"

    }

    else if(imc <= 34.9){
        string = "Obesidade grau I"

    }

    else if(imc <= 39.9){
        string = "Obesidade grau II"

    }

    else{
        string = "Obesidade grau III"

    }


    resultado.innerHTML = nome.value + " o seu IMC é de " + imc + " O que lhe classifica com " + string;
}

function limpar(){
    peso.value = null;
    resultado.innerHTML = null;
    altura.value = null;
    nome.value = null;
}