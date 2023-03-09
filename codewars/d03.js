/*
Dados dois inteiros a e b, que podem ser positivos ou negativos, encontre a soma de todos os inteiros entre e incluindo-os e retorne-a. Se os dois números forem iguais, retorne aou b.
Nota: a e bnão são encomendados!
 */

function getSum(a, b) {
    const arrayNum = []

    // atribuindo os valores do intervalo entre os números na array
    if(a > b) {
        for(let i = b; i <= a; i++) {
            arrayNum.push(i)
        }       
    }
    if(b > a) {
        for(let i = a; i <= b; i++) {
            arrayNum.push(i)
        }
    }
    if (a == b) {
        return a
    }

    // soma os valores da array
    let sum = arrayNum.reduce(function(accumulator,value){
        return accumulator + value
      },0)
    
    return sum
}

console.log(getSum(-1, 2))
