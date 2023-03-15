// Conta letras com método filter

function contaLetra(palavra, letra) {
    let cadaLetra = palavra.split('')
    let ocorrencias = cadaLetra.filter(str => str === letra )
    return ocorrencias.length
}
console.log(contaLetra('mariana', 'a'))