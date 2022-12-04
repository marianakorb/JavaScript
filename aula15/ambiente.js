let num = [3,8,9,5,2,4]
num.sort() // coloca os elementos em ordem crescente

/* Forma tradicional de exibir os valores de um vetor:
*/
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}


/* Forma otimizada APENAS para varáveis compostas e
    objetos de exibir os valores de um vetor:
*/
for (let i in num) {
    console.log(num[i])
}


// Como descobrir o índice de um elemento 

console.log(num)
let n = 1
let posicao = num.indexOf(n)

if (posicao == -1) {
    console.log(`O número ${n} não foi encontrado na array`)
}else {
    console.log(`O número ${n} está no índice ${posicao}`)
}

