var idade = prompt("Digite a idade:")
idade = parseInt(idade)

document.write("<h1>Projeto Faixa Etária</h1><br>A idade digitada foi de " + idade + " anos.<br>")
if (idade >= 0 && idade < 15) {
    document.write("Faixa Etária: Criança.")
} else if (idade >= 15 && idade < 30) {
    document.write("Faixa Etária: Jovem.")
} else if (idade >= 30 && idade < 60) {
    document.write("Faixa Etária: Adulto.")
} else if (idade >= 60) {
    document.write("Faixa Etária: Idoso.")
} else {
    document.write("Idade informada inválida!")
}