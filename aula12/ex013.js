let agora = new Date()
let hora = agora.getHours()

console.log(`Agora são ${hora} horas`)
if (hora < 13 && hora != 00) {
    console.log('Bom dia!')
} else if (hora > 17) {
    console.log('Boa noite!')
} else {
    console.log('Boa tarde!')
}