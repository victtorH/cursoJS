var agora = new Date()
var hora = agora.getHours()
 if (hora < 12 && hora > 5){
    console.log(`Bom dia, agora são ${hora}h`)
 }else if( hora < 18 && hora >11){
    console.log(`boa tarde, agora são ${hora}h`)
 }else if(hora > 17 && hora < 24){
    console.log(`boa noite, gora são ${hora}h`)
 }else if (hora > -1 && hora < 6){
    console.log(`boa madrugada, agora são ${hora}h`)
 }else{
    console.log(`${hora}h HORA NÃO EXISTE!!!`)
 }