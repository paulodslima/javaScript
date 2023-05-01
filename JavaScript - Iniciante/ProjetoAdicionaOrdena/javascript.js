var objetos = ['Cadeira','Impressora','Garfo']

function adicionar(){
    palavra = document.getElementById('entrada').value.charAt(0).toUpperCase() + document.getElementById('entrada').value.slice(1);
    if (palavra === ""){
        alert("Informe um valor válido!")
    } else {
        posicao = objetos.indexOf(palavra)
        if (posicao === -1){
        objetos.push(palavra)
        console.log(objetos)
        var retornoTexto =  document.querySelector("#retorno")
        retornoTexto.innerHTML = "Retorno:<br>Palavra adicionada: " + palavra + "<br>Lista atual: " + objetos
        } else {
            alert("Objeto já foi adicionado")
        }
    }
    document.getElementById('entrada').value = null
}

function ordenar(){
    var listaAntesOrdenar = "Retorno:<br>Lista antes do ordenamento: " + objetos
    objetos.sort()
    var retornoTexto =  document.querySelector("#retorno")
    retornoTexto.innerHTML =listaAntesOrdenar + "<br>Lista após ordenamento: " + objetos
}