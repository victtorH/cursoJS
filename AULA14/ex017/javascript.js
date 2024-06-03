var ini = window.document.getElementById("numero")
var btn = window.document.getElementById("btn")
var res = window.document.getElementById("resultado")

btn.addEventListener("click",clique)

function clique(){
    var num = Number(ini.value)
if (num == 0){
    window.alert('[ERRO]digite um valor para poder ser executado!')
    
}else{
    res.innerHTML = " "
    
    for(var cal = 0; cal < 11;cal++){
        var mult = num*cal
        
        res.innerHTML += `${num}X${cal}=${mult}/`
    }
}}


