function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Está faltando os dados')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert('[ERRO] Passo inválido. Considerando passo = 1')
            p = 1
        }
        if(i < f) {
            // CONTAGEM CRESCENTE 
            for (let c = i; c <= f; c = c + p) {
            res.innerHTML += `${c} `
            }
        } else {
            // CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c = c - p) {
                res.innerHTML += `${c} `
            }
        }
    }
}