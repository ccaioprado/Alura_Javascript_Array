const notas = [10,6.5,8,7.5]
let somaDasnotas = 0 
// Se le "Para cada nota de notas"
for(let nota of notas){
    somaDasnotas += nota;

    media = somaDasnotas/notas.length
}

console.log(`A média é ${media}`)
