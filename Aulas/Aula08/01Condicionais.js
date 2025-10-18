/*

    E x e m p l o       D e      C o n d i c i o n a i s

*/

// Operadores relacionais
/**
 * > = "Maior que" => Retorna true / false (boolean values.)
 * < = "Menor que" => Retorna true / false (boolean values.)
 * >= = "Maior ou igual" => Retorna true / false (boolean values.)
 * <= = "Menor ou igual" => Retorna true / false (boolean values.)
 * == = "Igual a" => Retorna true / false (boolean values.)
 * != = "Diferente de" => Retorna true / false (boolean values.)
*/


// Operadores lógicos
/**
 * && => AND (e): característica X e Y tem que ser verdadeiras.
    idade >= 18 && idade <= 60: true para idades maiores que 18 e menores que 60 (18-60)
 * || => OR (ou): característica X ou Y tem que ser verdadeiras.
    idade <= 18 || idade >= 60: true para idades menores que 18 ou maiores que 60
 * ! => NOT (não): resultado verdadeiro vira falso, e falso vira verdadeiro.
    !(idade <= 18): se idade for menor ou igual a 18, retorna verdadeiro. Porém, retornará falso pois utiliza o NOT.
*/







let idade = 17;

// Condicional simples
/*
Se a condição for satisfeita, vai demonstrar X resultado.
Caso não, o código segue normalmente.
*/

if (idade >= 2) {
    console.log("Você pode brincar com LEGO!")
}

// Condicional if - else.
/* 
Se a condição de if for satisfeita, ele mostrará determinado resultado.
Caso contrário, mostrará o outro resultado.
*/

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você NÃO pode dirigir.")
}


// Condicional if - else - else if
/*
else if funciona como um outro if, delimitando outra condição.
se a condição if não for satisfeita, testa else if, caso não for também,
else é chamada.
*/

if (idade >= 18) {
    console.log("Você pode beber no Brasil, mas não no EUA.");
} else if (idade >= 21) {
    console.log("Você pode beber no Brasil e no EUA.");
} else {
    console.log("Você NÃO pode beber.");
}


// Switch;

console.log("Menu de opções.");
console.log("1 - Cadastro");
console.log("2 - Consulta");
console.log("3 - Alteração");
console.log("4 - Exclusão");

let op = 2;


switch (op) {
    case 1: console.log("Escolheu cadastro.");
    break;
    case 2: console.log("Escolheu consulta.");
    break;
    case 3: console.log("Escolheu alteração.");
    break;
    case 4: console.log("Escolheu exclusão.");
    break;
    default: console.log("Opção invalida.")
    break;
};