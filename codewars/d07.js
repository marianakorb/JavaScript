/*
Um isograma é uma palavra que não possui letras repetidas, consecutivas ou não consecutivas. Implemente uma função que determina se uma string que contém apenas letras é um isograma. Suponha que a string vazia seja um isograma. Ignorar maiúsculas e minúsculas.

Exemplo: (Entrada --> Saída)
    "Dermatoglíficos" --> true 
    "aba" --> false 
    "moOse" --> false (ignorar maiúsculas e minúsculas)
*/

function isIsogram(str){

    if(str.length == 0) {
        return true
    } else{
        str = str.toLowerCase()
    }
      
    //split string into individual characters. 
    let arr = str.split('');
    let ordenadaArr = arr.slice().sort();

    for(var i = 0; i < arr.length; i++){
        //if duplicate is found return false.
        if(ordenadaArr[i + 1] === ordenadaArr[i]) return false  
    }  

    return true
}

const palavra = {
    p01: 'Dermatoglyphics', // true
    p02: 'aba',             // false
    p03: 'moOse',           // false
    p04: ''                 // true
}

console.log(isIsogram(palavra.p03))