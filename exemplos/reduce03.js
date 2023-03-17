
const pessoas = [
    {nome: 'Daniel', idade: 28},
    {nome: 'Maria', idade: 30},
    {nome: 'Marta', idade: 30},
    {nome: 'Milene', idade: 22},
    {nome: 'Evelyn', idade: 22},
    {nome: 'Mariana', idade: 21},
    {nome: 'João', idade: 28},
    {nome: 'Pedro', idade: 21}
]

const porIdade = pessoas.reduce( (pessoasIdade, pessoaAtual) => {
    pessoasIdade[pessoaAtual.idade] = pessoasIdade[pessoaAtual.idade] || []
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)

    // mesma coisa que isso:
    /* if(pessoasIdade[pessoaAtual.idade]) {
        pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    } else {
        pessoasIdade[pessoaAtual.idade] = []
        pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    } */
    return pessoasIdade
}, {})

console.log(porIdade)
// { 28: ['Daniel'], 30: ['Marta', 'Maria']}