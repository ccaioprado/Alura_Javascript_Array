const notas = [10,6,8,5.5,10]

// Remove o ultimo valor do array. Indicar o indice do valor a ser removido ou não não altera o resultado final
notas.pop()

console.log(notas)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A média é ${media}`)