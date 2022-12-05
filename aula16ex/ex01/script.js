
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
        let repete = valores.indexOf(n)

        if(repete != -1) {
            lista.removeChild(item)
            alert('Valor já encontrado na lista')
        } else {
            valores.push(n)  
        } 
    } 
}

function finalizar() {
    let pr = document.createElement('p')
    if (valores.length == 0) {
        alert('Por favor, adicione algum valor!')
    } else {
        pr.innerHTML = `<br> Total de números cadastrados: ${valores.length}` 
        res.appendChild(pr)
    }
    
    valores.sort()
    pr.innerHTML += `<br>O menor número cadastrado: ${valores[0]}`
    pr.innerHTML += `<br>O maior número cadastrado: ${valores[valores.length - 1]} `

    let soma = 0
    for(let i in valores) {
        soma += valores[i]    
    }
    pr.innerHTML += `<br>A soma de todos os valores é: ${soma}`

    let media = 0
    media = soma/valores.length
    pr.innerHTML += `<br>A média do valores é: ${media}`

    
}





