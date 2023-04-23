var numero1 = parseFloat(prompt("Digite o primeiro número:"))
var operacao = prompt("Qual operação você deseja efetuar: soma ou subtração?\n(Escreva o tipo de operação por texto)")
var numero2 = parseFloat(prompt("Digite o segundo número:"))
function calcular (numero1, numero2, operacao) {
    if (operacao === "soma") {
        soma = numero1 + numero2
        return soma
    } else if (operacao === "subtração") {
        subtracao = numero1 - numero2
        return subtracao
    } else {
            return null
        }
    }

    var calculo = calcular(numero1, numero2, operacao)
    if (calculo == null) {
        document.write("<h1>Você escreveu uma operação não disponível, retorne ao inicio do código e escolha uma habilitada!</h1>")
    } else {
        document.write("<h1>O resultado é: " + calculo + ".</h1>")
    }