const itens = [
    {description: 'pen', quantity: 1, price: 3},
    {description: 'rule', quantity: 2, price: 5},
    {description: 'erase', quantity: 2, price: 6}
    ]

const total = itens.reduce( (soma, itemAtual) => {
    return soma + (itemAtual.price * itemAtual.quantity)
}, 0)

console.log(total)

// -----------------------------------------------------

const names = ['Daniel', 'Maria', 'Marta', 'Juca', 'João', 'Jéssica']

const countNames = names.reduce((count, nomeAtual) => {
    // pega a primeira letra
    const primeiraLetra = nomeAtual[0].toLowerCase()

    // confere se a primeira letra é uma propriedade no objeto
    // se for, acrescenta +1
    if(count[primeiraLetra]) {
        count[primeiraLetra]++
        // se não for, atribui 1 à nova propriedade
    } else {
        count[primeiraLetra] = 1
    }
    return count
}, {})

console.log(countNames) // { d: 1, m: 2, j: 3 }
