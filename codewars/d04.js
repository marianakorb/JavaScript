/*
Escreva uma função que aceite um array de 10 inteiros (entre 0 e 9), que retorne uma string desses números na forma de um número de telefone.
    O formato retornado deve estar correto para concluir este desafio.
    Não se esqueça do espaço após os parênteses de fechamento!
*/

function createPhoneNumber(numbers){
    let parenteses = ''
    let antesDoTraco = ''
    let depoisDoTraco = ''

    for(let i in numbers) {
        if(i >= 0 && i <= 2) {
            parenteses += numbers[i]
        }
        if(i >= 3 && i <= 5) {
            antesDoTraco += numbers[i]
        }
        if(i >= 6 && i <= 9) {
            depoisDoTraco += numbers[i]
        }
 
    }    
    return `(${parenteses}) ${antesDoTraco}-${depoisDoTraco}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


// Forma mais inteligente:

function criaNumeroTelefone(numbers) {
    let format = "(xxx) xxx-xxxx";
  
    for(let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

console.log(criaNumeroTelefone([1, 9, 8, 4, 6, 7, 4, 6, 9, 0]))