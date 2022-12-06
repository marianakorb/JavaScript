let valores = [4, 8, 2, 10, 5]
let menor = valores[0]
let maior = valores[0]
let soma = 0

for (let i in valores) {
    soma += valores[i]
    if (valores[i] > maior)
        maior = valores[i]
    if (valores[i] < menor)
        menor = valores[i]
}

console.log(`O menor número é ${menor}`)
console.log(`O maior número é ${maior}`)
console.log(`A somatória é ${soma}`)