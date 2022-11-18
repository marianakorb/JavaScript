
function verificar() {
    let paises = document.getElementById('pais')
    let resp = document.querySelector('p.res')
    let pais = String(paises.value)
    //Condição composta
    if (pais === "brasil") {
        resp.innerHTML = 'Você é estrangeiro(a)'
    }else{
        resp.innerHTML = 'Você é brasileiro(a)'
    }
}

