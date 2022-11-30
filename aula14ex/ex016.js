function contar() {
   /* let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let c = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    let contagem = document.getElementsByClassName('contagem')
*/
    let c = 1
    let f = 10
    let p = 1
    console.log(`${c} ${f} ${p}`)
    for(i = c; i <= f; i = i + p) {
        console.log(i)
    }
}