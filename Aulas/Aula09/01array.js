/*


    V e t o r e s


*/

const vetor = [];
for(i = 1; i < 6; i++) {
    vetor.push(`Item ${i}`)
}

console.log(`Vetor original: ${vetor}`)
vetor.splice(1, 1) // Indice e quantidade; Indica os itens que quer remover.
    console.log("")
console.log(`Vetor pós-splice: ${vetor}`)
    console.log("")
console.log(vetor.pop() + " // <= Item removido pelo vetor.pop()"); // Remove o último elemento e volta o valor do item (é uma função)
console.log(`Vetor pós-splice e pop: ${vetor}`)

console.log("")
console.log("==".repeat(20))
console.log('')

// Percorrendo o vetor

console.log("Primeira opção")
for(let it of vetor) {
    console.log(it);
}

console.log("")

console.log("Segunda opção")
vetor.forEach(it => { 
    console.log(it)
})
