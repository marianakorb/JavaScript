// O dobro de números positivos

const numeros = [-10, 0, 1, 2, 4]

const dobroDosNumeros = numeros.reduce( (dobro, numAtual) => {
    if(numAtual > 0) {
        dobro.push(numAtual*2)
    } 
    return dobro
}, [])

console.log(dobroDosNumeros)