var nome = prompt("Digite seu nome:")
var altura = prompt("Digite sua altura (em cm):")
var peso = prompt("Digite seu peso")
var imc
var classificacao

altura = parseFloat(altura)
peso = parseFloat(peso)
altura = altura/100
imc = peso/(altura*altura)

if (imc < 16) {
    classificacao = "Baixo peso muito grave"
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso grave" 
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = " Baixo peso" 
} else if (imc >= 18.50 && imc <= 24.99) {
    classificacao = "Peso normal" 
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso" 
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I" 
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II" 
} else {
    classificacao = "Obesidade grau III"  
}

document.write("<h1>" + nome + " possui índice de massa corporal igual a " + imc.toString() + ", sendo classificado como: " + classificacao + "</h1>")