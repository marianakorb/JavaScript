
let num = document.getElementById('valor')
let lista = document.getElementById('seltab')
let res = document.getElementById('res')

let valores = []

function adicionarValor() {

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')

    } else if (num.value < 1 || num.value > 100) {
        window.alert('Número inválido!')

    } else {
        n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        let repete = valores.indexOf(n)

        if(repete != -1) {
            lista.removeChild(item)
            alert('Valor já encontrado na lista')
        } else {
            valores.push(n)  
        } 
    }
    num.value = ''
    num.focus() 
}

// Para o sort() identificar números e não strings
function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
}

function finalizar() {
    let total = valores.length
    let soma = 0
    let media = 0
    
    valores.sort(sortNumbers) //organiza na ordem crescente para achar o maior e menor número.
    res.innerHTML = ''

    if (valores.length == 0) {
        alert('Por favor, adicione algum valor!')
    } else {
        res.innerHTML = `<p>Total de números cadastrados: ${total}</p>` 
    }
    
    for(let i in valores) {
        soma += valores[i]    
    } 
    media = soma/total

    res.innerHTML += `<p>O menor número cadastrado: ${valores[0]}</p>`
    res.innerHTML += `<p>O maior número cadastrado: ${valores[total - 1]}</p>`
    res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
    res.innerHTML += `<p>A média do valores é: ${media}</p>`

}






