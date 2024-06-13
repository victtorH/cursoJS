let amigo = {
    nome:'josé',
    idade: 25,
    peso:60.2,
    engordou(p=0){
        console.log(`engordou ${p}kg`)
        amigo.peso += p
    },
}
amigo.engordou(-12)
console.log(`meu amigo ${amigo.nome} tem ${amigo.idade} de idade, pesa só ${amigo.peso}kg`)