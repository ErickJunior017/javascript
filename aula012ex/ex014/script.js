function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'imagem/manha.jpg'
        document.body.style.background = '#ffd771'
    }else if (hora >=12 && hora < 18){
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = '#fc6028b7'
    }else{
        img.src =  'imagem/noite.jpg'
        document.body.style.background = '#444444c0'
    }
}

