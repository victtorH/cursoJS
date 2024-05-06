function carregar(){

var cab = window.document.getElementById("cab")
var h = window.document.getElementById("hora")
var img = window.document.getElementById("foto")

var horario = new Date
hora = horario.getHours()
h.innerHTML += `${hora}h`


if (hora < 12 && hora > 5){
    window.document.body.style = " background-color:rgb(219, 186, 123);"
    cab.innerHTML = "BOM DIA"
    img.src="fotomanhã.png"
    img.style = "  position: relative;top:-250px;left: -30px; height:800px;"


}else if ( hora < 19 && hora > 11){
    cab.innerHTML ="BOA TARDE"
    window.document.body.style = "background-color:#495175; "
    img.src="fototarde.png"
    img.style = "  position: relative;top:-80px;left: -40px;"
}else{
    cab.innerHTML = "BOA NOITE"
    window.document.body.style = "background-color: rgb(15, 48, 78);"
    img.src = "fotonoite.png"
    img.style = "  position: relative;top:-220px;left: -10px; height:700px;"
    
}
}

