function somar() {
    let soma = 0
    let t1 = document.getElementById('txt1')
    let t2 = document.getElementById('txt2')
    let res = document.getElementById('resultado')

    let n1 = Number(t1.value)
    let n2 = Number(t2.value)
    soma = n1 + n2

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`    
}