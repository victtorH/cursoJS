var nas = window.document.getElementById("nasceu")
var sex = window.document.getElementById("sexo")
var masc = window.document.getElementById("masculino")
var fem = window.document.getElementById("feminino")
var ver = window.document.getElementById("verificar")
var carr = window.document.getElementById("carregar")

ver.addEventListener("onclick", clique)

function clique(){
    window.document.carr.innerHTML = `sua idade é ${nas}`
}
