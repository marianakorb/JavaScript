function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p><br>`

    if (hora <= 12 && hora > 0) {
        msg.innerHTML += 'Bom dia!'
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#f6fa0c91'

    } else if (hora > 12 && hora < 18) {
        msg.innerHTML += 'Boa tarde!'
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#e79049be'

    } else {
        msg.innerHTML += 'Boa noite!'
        img.scr = 'imagens/noite.jpg'
        document.body.style.background = '#140d33'
    }
}