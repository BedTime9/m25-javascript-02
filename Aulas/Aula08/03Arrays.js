/*

    E x e m p l o s     D e     A r r a y s

*/


// Teste de posições

let nomes = ["Filipe", "Khaiki", "Luís"]
console.log(nomes[2])

        console.log("==".repeat(20))

// Leitura da lista inteira

for(i = 0; i < nomes.length; i++) {
    console.log(`[${i}] - ${nomes[i]}`)
}

        console.log("==".repeat(20))


// Leitura de listas (2ª forma)

for(const it of nomes) {
    console.log(it);
}

        console.log("==".repeat(20))


// Leitura de listas (3ª forma)

let rd = 0;
while (rd < nomes.length) {
    console.log(nomes[rd]);
    rd++
}

// Extra: leitura de array dentro de array
/*
let column = [1, 2]
let rows = [1, 2, 3, 4]

for(i = 0; i <= column.length; i++) {
    for(j = 0; j <= rows.length; j++) {
        console.log(`[${i}] - [${j}]`)
    }
} 
*/