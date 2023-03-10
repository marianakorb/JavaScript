/*
Sua tarefa é criar uma função que possa receber qualquer número inteiro não negativo como argumento e retorná-lo com seus dígitos em ordem decrescente. Essencialmente, reorganize os dígitos para criar o maior número possível.
*/

function descendingOrder(n){
    //Convertendo número para array:
    //let myFunc = num => Number(num)
    //const arrayNumeros = Array.from(String(n), myFunc)

    const arrayNum = []
    let paraString =  n.toString()
    for(let i in paraString) {
        arrayNum.push(parseInt(paraString[i]))
    }
    let primeiro = 0
    const arrayDecrescente = []
    for(let i in arrayNum) {
        if(typeof arrayNum[i] !== "number" ) {
            arrayNum.push('')
        }
        if(arrayNum[i] >= primeiro) {
            primeiro = arrayNum[i]
            arrayDecrescente.unshift(arrayNum[i])
        } else {
            arrayDecrescente.push(arrayNum[i])
        }
    }
    Number(arrayDecrescente)

    
    return arrayDecrescente
}

console.log(descendingOrder(42045))