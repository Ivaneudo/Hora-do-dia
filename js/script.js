function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >=0 && hora < 12){
        // BOM DIA!
        img.src = 'img/manha.jpg'
        document.body.style.background = '#fde4c6'
    }else if (hora >=12 && hora <= 18){
        // BOA TARDE!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#bf8762'
    }else {
        // BOA NOITE!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#9678ac'
    }
}

