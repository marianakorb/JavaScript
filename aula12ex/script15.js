function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        if (fsex[0].checked) {
            if(idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/bebe-m.jpg')
                genero = 'menino'
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg')  
                genero = 'jovem'       
            }  
            else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.jpg')
                genero = 'homem'  
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg')
                genero = 'idoso'  
            }
        } else if (fsex[1].checked) {
        
            if(idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/bebe-f.jpg')
                genero = 'menina'
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f.jpg')
                genero = 'jovem'  
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.jpg')
                genero = 'mulher'  
            } else {
                img.setAttribute('src', 'imagens/idosa.jpg')
                genero = 'idosa'  
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}