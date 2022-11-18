function calcular() {
    let txtv = document.querySelector('input#txtvel')
    let res = document.querySelector('div.res')
    let vel = Number(txtv.value)
   
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}km/h</strong>.</p>`
    if(vel > 60){
        res.innerHTML += '<p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>'
    }
    res.innerHTML += '<p>Digija sempre usando cinto de segurança.</p>'

}