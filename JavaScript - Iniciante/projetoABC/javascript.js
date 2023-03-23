var a = 10
var b = 20
var c = null

console.log(a)
console.log(b)
document.write("<h1>Projeto A B C</h1>")
document.write("<h2>Os valores iniciais de A e B são: A = " + a + ", B = " + b + "</h2>")

c = a
a = b
b = c

console.log(a)
console.log(b)
document.write("<h2>Os valores finais de A e B são: A = " + a + ", B = " + b + "</h2>")