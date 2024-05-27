function carregar(){
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    if (segundos < 10){
        segundos = "0" + segundos
    }

    if (minutos < 10){
        minutos = "0" + minutos
    }

    if (hora >=5 && hora < 12){
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

 

   
    document.getElementById("msg").innerHTML = `${hora}:${minutos}:${segundos}`

    setInterval("carregar()", 100)
}

