area.addEventLitener('click', clicar)
area.addEventLitener('mouseenter', entrar)
area.addEventLitener('mouseout', sair)

function clicar() {
    let area = document.querySelector('div#area')
    area.innerText = 'Clicou!'
    area.style.background = 'red'
}

function entrar() {
    let area = document.querySelector('div#area')
    area.innerText = 'Entrou.'
}

function sair() {
    let area = document.querySelector('div#area')
    area.innerText = 'Saiu.'
    area.style.background = 'green'
}