var rec = document.getElementById('receptor')
var acre = document.getElementById('acrecentar')
var valo = document.getElementById('valores')
var ver = document.getElementById('verificar')
var res = document.getElementById('resposta')

acre.addEventListener('click',clique)
ver.addEventListener('click', click)

let array = []

function clique(){
 
    let rece = Number(rec.value)
    
    if(rece <= 0 || rece > 100){
        window.alert('[ERRO] valor invalido')
    }else if( array.indexOf(rece) != -1 ){
        window.alert(`valor ${rece} já encontrado`)
    }else{
        array.push(rece)
        let repositor = document.createElement('option')
        repositor.text =  `o numero ${rece} foi adicionado`
        valo.appendChild(repositor)
        
}
 console.log(array)
 
}

function click(){
    array.sort()

    res.innerHTML = `<h1> AO TODO, FORAM ${array.length} NUMEROS ADICIONADOS  </h1>`

    

    res.innerHTML += `<h3> o menor valor adicionado foi ${array[0]}</h3>`
    
    for( contador in array.length){
        if( contador = array){
            res.innerHTML = `o maior valor é ${array[contador]}`
        }
    }
        rec.value = ''
        rec.focus()

    console.log(array)
    }
    

