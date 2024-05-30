var ini = window.document.getElementById('incio')
var fim = window.document.getElementById('fim')
var esp = window.document.getElementById('espaço')
var res = window.document.getElementById('resultado')
var btn = window.document.getElementById('btn')

btn.addEventListener("click",clique)

function clique(){
var numini = Number(ini.value)
var numfim = Number(fim.value)
var espa = Number(esp.value)
if (numini < numfim){
   res.innerHTML = " "
    var numfim = numfim+1
    for(numini; numini < numfim; numini+=espa){
         if(numini <= 0 || numfim <= 0 || espa <= 0){
        window.alert(`[ERRO]nenhum valor foi atribuido, o valor será retornado a 1`)
         res.innerHTML += `N°${numini}/`
         espa = 1
    }else{
        res.innerHTML += `N°${numini}/`
    }
        }
    }else{
        res.innerHTML = " "
        for(numini; numini >= numfim; numini-=espa){
          
             if(numfim <= 0 ){
                window.alert(`[ERRO]nenhum valor foi atribuido, o valor será retornado a 1`)
                numfim = 1
                numini++
            } else  if(numini <= 0 || espa <= 0){
            window.alert(`[ERRO]nenhum valor foi atribuido, o valor será retornado a 1`)
             res.innerHTML += `N°${numini}/`
             espa = 1 
             }else{
            res.innerHTML += `N°${numini}/`
        }}
    }}
