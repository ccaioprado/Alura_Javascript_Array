const notas = [10,6.5,8,7.5]

let somaDasNotas = 0 
// os parâmetros são os valores do array e o indice
notas.forEach(function(nota,indice){
    somaDasNotas+=nota
    console.log(indice)
})

media = somaDasnotas/notas.length

console.log(`A média é ${media}`)