
function contaLetra(string, letra) {

    let ocorrencias = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] == letra){
            ocorrencias++
        }
    }
    document.write(`A palavra "${string}" possui ${ocorrencias} letra(s) "${letra}".`)
    return ocorrencias;
}

let palavra = window.prompt("Escreva uma palavra: ")
let caractere = window.prompt("Digite uma letra: ")

console.log(contaLetra(palavra, caractere))

