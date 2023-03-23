var a = 10
var b = 20
var c = null

console.log(a)
console.log(b)
console.log(c)
document.write("<h1>Projeto A B C</h1>")
document.write("<h3>O projeto A B C consiste em, usando a variavel C, trocar os valores da variavel A e B.</h3>")
document.write("<h2>Os valores iniciais de A, B e C são: A = " + a + ", B = " + b + ", C = " + c + "</h2>")

document.write("<p>1. C recebe o valor de A(10) <br>2. A recebe o valor de B(20)<br>3. B recebe o valor atual de C(10)</p>")

c = a
a = b
b = c

console.log(a)
console.log(b)
console.log(c)
document.write("<h2>Os valores finais de A, B e C são: A = " + a + ", B = " + b + ", C = " + c + "</h2>")