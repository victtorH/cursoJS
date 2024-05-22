var carr = window.document.getElementById("carregar")
var nas = window.document.getElementById("nasceu")
var sexo = window.document.getElementsByName("sex")
var ver = window.document.getElementById("verificar")

ver.addEventListener("click",clique)

var  Data = new Date
var ano = Data.getFullYear()

function clique(){
   var nasc = Number(nas.value)
   var idade = ano - nasc
   var genero = " "
   var pessoa = " "
   if (sexo[0].checked){
       genero = "masculino"
      
   }else{
       genero = "feminino"
      
   }
   if (idade < 13){
         pessoa = "criança" 
      }else if( idade < 18){
         pessoa = "adolecente"
      }else if( idade < 25){
         pessoa = "jovem adulto"
      }else if( idade < 46){
         pessoa = "aduto"
      }else{
         pessoa = "idoso"
      }
   carr.innerHTML = `Voce é do sexo ${genero} tem ${idade} anos e é ${pessoa}`
   
}
