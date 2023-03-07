/* Elevar ao quadrado cada dígito de um número e concatená-los.

Por exemplo, se executarmos 9119 na função, sairá 811181, porque 9^2 é 81 e 1^2 é 1. (81-1-1-81)

Exemplo #2: Uma entrada de 765 retornará/deverá retornar 493625 porque 7^2 é 49, 6^2 é 36 e 5^2 é 25. (49-36-25)

Observação: a função aceita um número inteiro e retorna um número inteiro.
 */

function squareDigits(num) {
    let resultado = ''
    let numeros = num.toString()
    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i]**2
        resultado += n       
    }
    return parseInt(resultado)
}

let num = 5412
console.log(squareDigits(num))