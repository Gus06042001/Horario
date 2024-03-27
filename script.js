function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()
msg.innerHTML=`Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //Bom dia!
    img.src = 'manha.svg'
    document.body.style.background = ' rgb(95, 196, 255)' 
}else if (hora >=12 && hora <= 18){
    //Boa Tarde!
    img.src = 'tarde.svg'
    document.body.style.background = ' rgb(255, 145, 0)'
}
else{
    //Boa Noite!
    img.src = 'noite.svg'
    document.body.style.background = 'rgba(51, 51, 51, 0.945)'
}
}
