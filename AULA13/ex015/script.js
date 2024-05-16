var carr = window.document.getElementById("carregar")
var nas = window.document.getElementById("nasceu")
var sex = window.document.getElementById("sexo")
var masc = window.document.getElementById("masculino")
var fem = window.document.getElementById("feminino")
var ver = window.document.getElementById("verificar")

ver.addEventListener("click",clique)

var  Data = new Date
var ano = Data.getFullYear()

function clique(){
   var nasc = Number(nas.value)
   var idade = ano - nasc
   carr.innerHTML = `Voce tem ${idade}`
}
