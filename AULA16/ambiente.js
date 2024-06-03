/*função simples
function soma(a=0, b=0){
   if(a == 0 || b == 0){
    console.log('[ERRO]digite um valor para que possa ser executado')
   }else{
    return a+b
}
}
console.log(soma(3,7))*/
//recursividade
function fatorial(n1){
   if ( n1 == 1 ){
     return 1
   }else{
        let cont = n1 * fatorial
        return cont
   }

}
console.log(fatorial(5))
