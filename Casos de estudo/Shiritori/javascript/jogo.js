var palavras = ['livro','caneta','garfo','panela','mesa','cama','microfone','celular','martelo','bolsa','criança','menina','garoto','pai','mãe','homem','mulher','professor','médica','estudante','ator','empresário','cachorro','gato','cavalo','tigre','papagaio','mico','capivara','palmeira','roseira','samambaia','capim','coqueiro','girassol','goiaba','banana','pitanga','laranja','limão','mamão','montanha','ilha','lago','rio','mangue','serra','bairro','cidade','país','manhã','noite','dia','sol','chuva','vento','mês','século','fada','fantasma','bruxa','sereia','vampiro','álbum','alcateia','armada','arquipélago','arvoredo','bando','bateria','boiada','cacho','cáfila','caravana','cardume','coletânea','colmeia','colônia','comitiva','constelação','cordilheira','enxame','esquadrilha','fardo','feixe','fornada','frota','junta','júri','manada','matilha','ninhada','nuvem','orquestra','panapaná','penca','pilha','plateia','pomar','praga','ramalhete','rebanho','renque','resma','réstia','saraivada','time','tripulação','tropa','turma','vara','flor','roupa','água','canela','planeta','recado','vida','papelaria','drogaria','espera','força','carinho','amizade','diversão','povo','colega','jardineiro','telefonista','marreco','águia','boto','peixinho','manga','ovo','passeio','fome','calor','frio','casinha','cartão']

var vogais = ['a','e','i','o','u','A','E','I','O','U']

function ultimaSilaba(){

    var numeroAleatorio = Math.floor(Math.random() * palavras.length)
    var silaba = palavras[numeroAleatorio]
    console.log(silaba)
    console.log(silaba[silaba.length-1])
    if (vogais.includes(silaba[silaba.length-1])){
        if (!(vogais.includes(silaba[silaba.length-2]))){
            if (silaba[silaba.length-2] == 'h' || silaba[silaba.length-2] == 'H' || silaba[silaba.length-2] == 'ã' || silaba[silaba.length-2] == 'Ã'){
                silaba = silaba.substring((silaba.length - 3))
                console.log(silaba)        
            } 
            else if(vogais.includes(silaba[silaba.length-3])){
                if (!(vogais.includes(silaba[silaba.length-2]))){
                    silaba = silaba.substring((silaba.length - 3))
                    console.log(silaba) 
                }
            }
            else {
                silaba = silaba.substring((silaba.length - 2))
                console.log(silaba)
            }
        }
        else {
            if (!(vogais.includes(silaba[silaba.length-3]))){
                silaba = silaba.substring((silaba.length - 3))
                console.log(silaba)
            } 
        }  
}
}
