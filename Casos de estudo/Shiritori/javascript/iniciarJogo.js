/* função para selecionar dificuldade e iniciar o jogo */
function iniciarJogo(){
    if (document.getElementById('nivel').value === ""){
        alert("Selecione uma dificuldade.")
    } else {
        nivel = document.getElementById('nivel').value
        window.location.href = 'paginas/jogo.html?dificuldade=' + document.getElementById('nivel').value
    }
}

