function carregar(){
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

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

    setInterval("carregar()", 1000)
}

