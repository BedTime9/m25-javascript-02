/*

    E x e m p l o s     D e     L o o p s

*/

// Uso de laço "for"

for (i = 0; i < 11; i++) {
    console.log(`[${i}] instância.`)
}

/*
    Resultado esperado: 
    Uma linha de codigo com [i] instância que se repete 11 vezes (0-10) 
*/


// Uso de laço "while"

let j = 0;
while (j <= 10) {
    console.log(`O valor de j está em: [${j}].`)
    j++
}

// Utilizando "do... while"

do {
    console.log(`Valor final de j = ` + i++)
} while(j < 10);
console.log("Fim do laço do...while.")