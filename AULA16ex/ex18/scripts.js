var rec = document.getElementById('receptor')
var acre = document.getElementById('acrecentar')
var valo = document.getElementById('valores')
var ver = document.getElementById('verificar')
var res = document.getElementById('resposta')

acre.addEventListener('click', clique)
ver.addEventListener('click', click)
var array = []



function clique() {
    var cap = Number(rec.value)
    if (cap <= 0 || cap > 100) {
        window.alert('[ERRO]numero digitado invalido.')
    } else if (array.indexOf(cap) != -1) {
        window.alert('Esse item já foi inserido.')
    } else {
        array.push(cap)
        var posi = document.createElement('option')
        posi.text = `valor ${cap} adicionado`
        valo.appendChild(posi)
    }
    rec.value = ''
    rec.focus()
    res.innerHTML = ' '

}

function click() {
    let quan = array.length

    let maior = array[0]
    let menor = array[0]
    let soma = array[0]
    
    for (let conta in array) {
        if (array[conta] > maior)
            maior = array[conta]
        if (array[conta] < menor)
            menor = array[conta]
        if (array[conta] < soma)
            soma = array[conta] + soma

    }
let média = soma / quan

    res.innerHTML += `<h3>Foram acresentados ${quan} numeros</h3>`
    res.innerHTML += `<h3>${maior} é o maior numeros</h3>`
    res.innerHTML += `<h3> ${menor} é o menor numeros</h3>`
    res.innerHTML += `<h3> ${soma} é a soma dos numeros</h3>`
     res.innerHTML += `<h3> ${média} é a média dos numeros</h3>`
}
console.log(array)