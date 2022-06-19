// String
// É a construtora de strings, toda string possui as popriedades e métodos do prototype de String

/*
const comida = 'Pizza';
console.log(typeof comida); // Retorna "Pizza"

const bebida = new String('Refri');
const ano = new String(2022);

console.log(typeof bebida); // Retorna o objeto (construtora string)
console.log(typeof ano); // Retorna o objeto (construtora string)
*/



/* =============================================================== */
/* =============================================================== */


// str.length
// Propriedade com o total de caracteres da string

/*
const comida = 'Pizza';
const sabor = 'Pizza de quatro queijos';

console.log(comida.length); // 5 caracteres
console.log(sabor.length); // 23 caracteres

console.log(comida[0]); // P
console.log(sabor[4]); // a
console.log(comida[comida.length - 1]); // a
*/



/* =============================================================== */
/* =============================================================== */


// str.charAt(n)
// Retorna o caracter de acordo com o index: "(n)"

/*
const nome = 'Gabriel';

nome.charAt(0); // G
nome.charAt(2); // b
nome.charAt(nome.length - 1); // l
*/



/* =============================================================== */
/* =============================================================== */


// str.concat(str2, str3)
// Concatena as strings e retorna o resultado

/*
const nome = 'Gabriel';
const sobrenome = 'Muquinho';

console.log(nome.concat(' ', sobrenome));
*/



/* =============================================================== */
/* =============================================================== */


// str.includes(search, position)
// Procura pela string exata dentro de outra string. A procura é case sensitive

/*
const frutas = 'Banana, Maçã, Melão, Manga, Uva, Laranja';
const fruta = 'Uva';
const fruta2 = 'Mamão';


console.log(frutas.includes(fruta)); // true
console.log(frutas.includes(fruta2)); // false
console.log(fruta.includes(fruta)); // false
*/



/* =============================================================== */
/* =============================================================== */


// str.endswith(search) - str.startswith(search)
// Procura pela string exata dentro de outra string. A procura é case sensitive.

/*
const fruta = 'Manga';

console.log(fruta.endsWith('ga')); // true
console.log(fruta.startsWith('Ma')); // true
console.log(fruta.endsWith('Man')); // false
*/



/* =============================================================== */
/* =============================================================== */


// str.slice(start, end)
// Corta a string de acordo com os valores de start e end

/*
const transacao1 = 'Depósito do cliente';
const transacao2 = 'Depósito do fornecedor';
const transacao3 = 'Taxa das camisas';


console.log(transacao1.slice(0, 4)); // Depó
console.log(transacao2.slice(2, 5)); // pós
console.log(transacao3.slice(0, 3)); // tax

console.log(transacao1.slice(12)); // cliente
console.log(transacao1.slice(-3)); // nte
console.log(transacao1.slice(9, 16)); // do clie
*/



/* =============================================================== */
/* =============================================================== */

// str.substring(start, end)
// Corta a string de acordo com os valores de start e end, porém não funciona com valores negativos como os métodos anteriores


/*
const nome = 'Gabriel';

console.log(nome.substring(2, 5)); // bri
console.log(nome.substring(0, 7)); // Gabriel
console.log(nome.substring(5)); // el
console.log(nome.substring(-2)); // Gabriel
*/



/* =============================================================== */
/* =============================================================== */


// str.indexof(search) - str.lastindexof(search)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

/*
const instrumento = 'Bateria';

console.log(instrumento.indexOf('B')); // 0
console.log(instrumento.lastIndexOf('t')); // 2
console.log(instrumento.indexOf('a')); // 1
console.log(instrumento.lastIndexOf('a')); // 6
*/


/* =============================================================== */
/* =============================================================== */


// STR.PADSTART(N, STR) E STR.PADEND(N, STR)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento

/*
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....
*/


/* =============================================================== */
/* =============================================================== */


// STR.REPEAT(N)
// Repete a string (n) vezes.

/*
const frase = 'Ta';

frase.repeat(5); // TaTaTaTaTa
*/


/* =============================================================== */
/* =============================================================== */


// .REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

/*
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
*/


/* =============================================================== */
/* =============================================================== */


// STR.SPLIT(PADRAO)
// Divide a string de acordo com o padrão passado e retorna uma array.

/*
const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
*/


/* =============================================================== */
/* =============================================================== */

// STR.TOLOWERCASE() E STR.TOUPPERCASE()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

/*
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true
*/


/* =============================================================== */
/* =============================================================== */

// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove espaço em branco do início ou final de uma string.

/*
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
*/