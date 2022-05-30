// Tipos de comentários no JavaScript:

// Comentário de uma linha

/*
Comentário 
de 
múltiplas linhas
*/


/* ============================================== */
/* ============================================== */

// Operadores de atribuição:

let a = 10;
let b = 20;

console.log(a += b); // a = a + b
console.log(a -= b); // a = a - b
console.log(a *= b); // a = a * b
console.log(a /= b); // a = a / b
console.log(a %= b); // a = a % b
console.log(a **= b); // a = a ** b


/* ============================================== */
/* ============================================== */

// Operador ternário, serve para abreviar condições com if e else.

let idade = 21;
let podeDirigir = (idade >= 18) ? 'Pode dirigir' : 'Não pode dirigir';
// condição ? true : false


console.log(podeDirigir);

// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição.


/* ============================================== */
/* ============================================== */

// If abreviado.
// Não é necessário abrir e fechar as chaves  quando retornamos apenas uma linha de código.

let possuiCarro = false;

if(possuiCarro) console.log('Possui carro');
else console.log('Não possui carro');

// ou

if(possuiCarro)
    console.log('Possui carro');
else
    console.log('Não possui carro');