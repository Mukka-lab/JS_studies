// Number
// É a construtora de números, todo número possui as propriedades e métodos do protótipo Number. Number também possui alguns métodos

/*
const ano = 2022;
const preco = new Number(49);
*/



/* ================================================== */
/* ================================================== */


// Number.isNaN() - Number.isInteger()
// isNaN() é um método de Number, ou seja, não faz parte do protótipo. isInteger() verifica se é uma integral (número inteiro).

/*
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(4 + 5)); // false

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.5)); // false
*/



/* ================================================== */
/* ================================================== */


// Number.parseFloat() - Number.parseInt()
// parseFloat() serve para retornamos um número a partir de uma string, mas a string deve começar com um número. parseInt recebe também um segundo parâmetro *Radix*, 10 é para decimal.

/*
console.log(parseFloat('12.50')); // 12.5
console.log(Number.parseFloat('5.5')); // 5.5
console.log(Number.parseFloat('200 Reais')); // 200
console.log(Number.parseFloat('R$ 150')); // NaN

console.log(parseInt('99.99', 10)); // 99
console.log(parseInt('8.38438545748', 10)); // 8
console.log(Number,parseInt('100 Reais', 10)); // 100
*/

// Float possui decimal, integer não.



/* ================================================== */
/* ================================================== */


// Number.toFixed(decimais - float)
// Arredonda o número com base no total de casas decimais do argumento

/*
const numeroDecimal = 85.938;
console.log(numeroDecimal.toFixed()); // 86

const numeroDecimal2 = 12.985;
console.log(numeroDecimal2.toFixed(2)); // 12.98

const numeroDecimal3 = 1999.00;
console.log(numeroDecimal3.toFixed()); // 1999
*/



/* ================================================== */
/* ================================================== */


// Number.toString(Radix)
// Transforma o número em string com base no Radix. Use o 10 para o sistema decimal

/*
const preco = 11.99;
console.log(preco.toString(10)); // '11.99'
console.log(typeof preco.toString(10)); // string
*/



/* ================================================== */
/* ================================================== */


// Number.toLocaleString(lang, options)
// Formata o número de acordo com a língua e opções passadas

/*
const preco = 49.99

console.log(preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $49.99
console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 49.99
*/



/* ================================================== */
/* ================================================== */


// Math
// É um objeto nativo que possui métodos e propriedades de expressões matemáticas comuns
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math



/* ================================================== */
/* ================================================== */


// Math.abs() - Math.ceil() - Math.floor() - Math.round()
// Math.abs() retorna o valor absoluto, ou seja, transforma o negativo em positivo.
// Math.ceil() arredonda para cima - Math.floor() arredonda para baixo.
// Math.round() retorna para o número integral mais próximo.

/*
console.log(Math.abs(-102.52)); // 102.52
console.log(Math.ceil(12.2)); // 13
console.log(Math.floor(9.99)); // 9
console.log(Math.round(9.8)); // 10
console.log(Math.round(5.5)); // 6
*/



/* ================================================== */
/* ================================================== */


// Math.max() - Math.min() - Math.random()
// Math.max() retorna o maior número em uma lista de argumentos.
// Math.min() retorna o menor número em uma lista de argumentos.
// Math.random() retorna um número aleatório entre 0 e 1.

console.log(Math.max(2, 30, 58, 72, 97, 14)); // 97
console.log(Math.min(2, 10, 15, 20, 38)); // 2

console.log(Math.random()); // 0.XXX
console.log(Math.floor(Math.random() * 100)); // Entre 0 e 100
console.log(Math.floor(Math.random() * 500)); // Entre 0 e 500

// Número aleatório entre 55 e 120
console.log(Math.floor(Math.random() * (120 - 55 + 1)) + 55);
//console.log(Math.floor(Math.random() * (max - min + 1)) + min);