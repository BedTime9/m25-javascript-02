/*


    E x e m p l o s     D e     F u n ç õ e s


*/

// Funções nomeadas

function fatorial(numero) {
    let ret = 1;
    // Abaixo será um laço decrescente 5 * 4 * 3 * 2 * 1.

    for (i = numero; i > 1; i--) {
        ret *= i
    }
    return ret; // Retorna o valor
}

console.log(`O fatorial de 5 é: ${fatorial(5)}`)



// Arrow function

const fatorial_arrow = (numero) => {
    let ret = 1;

    for(let i = numero; i > 1; i--) {
        ret *= i;
    }
    return ret;
}
    
console.log(`O fatorial de 5 é: ${fatorial_arrow(5)}`)