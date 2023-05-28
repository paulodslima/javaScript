function separaUltimaSilaba (palavra){
    var vogais = ['a','e','i','o','u','A','E','I','O','U']

    if(vogais.includes(palavra[palavra.length - 1])){
        console.log("é uma vogal")
        if (palavra[palavra.length - 2] == 'u'){
            if (palavra[palavra.length - 3] == 'q'){
                console.log(palavra.substring(palavra.length - 3))  
            } else{
                console.log(palavra.substring(palavra.length - 1))
            }
        }
        else if(!(vogais.includes(palavra[palavra.length - 2]))){
            console.log('não é vogal')
            if(palavra[palavra.length - 2] == 'r'){
                if(vogais.includes(palavra[palavra.length - 3]) || palavra[palavra.length - 3] == 'r'){
                    console.log(palavra.substring(palavra.length - 2))
                }else{
                    console.log(palavra.substring(palavra.length - 3))
                }
            }else if(palavra[palavra.length - 2] == 'ã'){
                if(palavra[palavra.length - 3] == 'h'){
                    console.log(palavra.substring(palavra.length - 4))
                }else if(vogais.includes(palavra[palavra.length - 3])){
                    console.log(palavra.substring(palavra.length - 2))
                }else {
                    console.log(palavra.substring(palavra.length - 3))
                }
            }else if(palavra[palavra.length - 2] == 'h'){
                console.log(palavra.substring(palavra.length - 3))
            }else{
                console.log(palavra.substring(palavra.length - 2))
            }    
        }else{
            console.log(palavra.substring(palavra.length - 1))
        }
    }else {
        console.log('else')
    }
}