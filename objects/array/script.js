// Arrays
// Os arrays armazenam uma coleção de elementos, podendo ser eles strings, numbers, booleans, functions, objects e etc. Vale lembrar que também é possível armazenar array dentro de array.

/*
const frutas = ['Banana', 'Manga', 'Uva', 'Pera'];
const numeros = [12, 21, 89, 56, 18];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 34000}], function andar(nome) {console.log(nome)}];

console.log(dados[2]);
console.log(dados[1][2].cor);
*/



/* ======================================================== */
/* ======================================================== */


// Construção de arrays
// Toda array herda os métodos e propriedades do construtor de array

/*
const frutas = new Array('Banana,', 'Manga', 'Maçã');

console.log(frutas[1]); // Manga

console.log(frutas);
frutas[2] = 'Uva';
console.log(frutas[2]);
console.log(frutas);

frutas[3] = 'Kiwi';
console.log(frutas);

// Nunca use o exeplo a seguir
frutas[15] = 'Pera';
console.log(frutas);


// Método de construtor de array sendo usado em array.
console.log(frutas.length); // 16 elementos na array
*/


/* ======================================================== */
/* ======================================================== */


// Array.from()
// Array.from() é um método utilizado para transformar array-like's em uma array

/*
// Ao criar a const "listas", é criado uma NodeList
const listas = document.querySelectorAll('li');

// Tranformando a array-like (NodeList) em array
const listasArray = Array.from(listas);
*/


/* ========================================= */


/*
const pessoa = {
    0: 'Gabriel',
    1: 'Muquinho',
    2: 21,
    3: true,
    4: function(){
        return 'Olá';
    },
    length: 5,
};


// console.log(pessoa.4());


const pessoaArray = Array.from(pessoa);
*/



/* ======================================================== */
/* ======================================================== */


// Array.isArray()
// Verifica se o alor passado é uma array, retorna o resultado em booleano

/*
const listas = document.querySelectorAll('li');
const listasArray = Array.from(listas);


console.log(Array.isArray(listas)); // false
console.log(Array.isArray(listasArray)); // true
*/



/* ======================================================== */
/* ======================================================== */


// Propriedades e métodos do prototype
// [].length retorna o tamanho da array

/*
const frutas = ['Banana', 'Manga', ['Maçã', 'Maçã Verde']];

console.log(frutas.length); // 3
console.log(frutas[0].length); // 6
console.log(frutas[1].length); // 5

console.log(frutas[2].length); // 2
console.log(frutas[2][0].length); // 4
console.log(frutas[2][1].length); // 10
*/



/* ======================================================== */
/* ======================================================== */
/* ======================================================== */
/* ======================================================== */

// MÉTODOS MODIFICADORES
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original.

/* ======================================================== */
/* ======================================================== */

// [].sort()
// [].sort() organiza a array pelo unicode.

/*
const frutas = ['Uva', 'Manga', 'Banana', 'Ameixa'];

console.log(frutas.sort()); // ['Ameixa', 'Banana', 'Manga', 'Uva']


// O [].sort() não funciona muito bem com números, pois ele organiza a partir do primeiro caractere
const numeros = [1, 12, 21, 56, 78, 32, 9];

console.log(numeros.sort()); // [1, 12, 21, 32, 56, 78, 9]
*/



/* ======================================================== */
/* ======================================================== */


// [].unshift() - [].push()

// [].unshift() adiciona elementos no início da array e retorna o length da mesma.
// [].push() Adiciona elementos no final da array e retorna o length da mesma.

/*
const frutas = ['Manga', 'Uva', 'Pera'];

console.log(frutas.unshift('Maçã')); // 4
console.log(frutas); // ['Maçã', 'Manga', 'Uva', 'Pera']


console.log(frutas.push('Laranja')); // 5
console.log(frutas); // ['Maçã', 'Manga', 'Uva', 'Pera', 'Laranja']
*/



/* ======================================================== */
/* ======================================================== */


// [].shift() - [].pop()
// [].shift() remove o primeiro elemento da array e retorna o mesmo.
// [].pop() remove o último elemento da array e retorna o mesmo.

/*
const frutas = ['Uva', 'Manga', 'Pera', 'Abacate'];


console.log(frutas.shift()); // Uva

console.log(frutas.pop()); // Abacate


console.log(frutas); // ['Manga', 'Pera']
*/



/* ======================================================== */
/* ======================================================== */


// [].reverse()
// Inverte os elementos dentro da array e retorna a mesma

/*
const frutas = ['Maçã', 'Uva', 'Pera', 'Manga'];
console.log(frutas.reverse()); //['Manga', 'Pera', 'Uva', 'Maçã']
*/


/* ======================================================== */
/* ======================================================== */


// [].splice()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

/*
const frutas = ['Maçã', 'Uva', 'Manga'];

frutas.splice(1, 0, 'Pera', 'Abacate');
console.log(frutas); //['Maçã', 'Pera', 'Abacate', 'Uva', 'Manga']

frutas.splice(0, 3, 'Laranja');
console.log(frutas); // ['Laranja', 'Uva', 'Manga']
*/



/* ======================================================== */
/* ======================================================== */


// [].copyWithin()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do início até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como início a posição 0 e o final o valor total da array

/*
const numeros = [2, 5, 60, 72, 46];


console.log(numeros.copyWithin(2, 0, 3)); // [2, 5, 2, 5, 60]

console.log(numeros.copyWithin(-1)); // [2, 5, 60, 72, 2]
*/



/* ======================================================== */
/* ======================================================== */


// [].fill()
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

/*
const frutas = ['Uva', 'Manga', 'Maçã', 'Pera'];

//console.log(frutas.fill('Mamão', 0, 3)); // ['Mamão', 'Mamão', 'Mamão', 'Pera']
//console.log(frutas.fill('Abacate', 2, 4)); // ['Uva', 'Manga', 'Abacate', 'Abacate']
console.log(frutas.fill('Melão')); // ['Melão', 'Melão', 'Melão', 'Melão']
*/



/* ======================================================== */
/* ======================================================== */
/* ======================================================== */
/* ======================================================== */

// MÉTODOS DE ACESSO
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada.

/* ======================================================== */
/* ======================================================== */


// [].concat()
// [].concat() irá concatenar a array com o valor passado.

/*
const esportes = ['Basquete', 'Futebol'];
const esportes2 = ['Vôlei', 'Artes Marciais'];

const variosEsportes = esportes.concat(esportes2);
console.log(variosEsportes); // ['Basquete', 'Futebol', 'Vôlei', 'Artes Marciais']

const maisEsportes = esportes.concat(esportes2, 'Tênis');
console.log(maisEsportes); // ['Basquete', 'Futebol', 'Vôlei', 'Artes Marciais', 'Tênis']
*/



/* ======================================================== */
/* ======================================================== */


// [].includes() - [].indexOf() - [].lastIndexOf()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false.
// [].indexOf(valor) Verifica se a array possui o valor e retorna o index do primeiro valor na array.
// [].lastIndexOf(valor) Verifica se a array possu o valor e retorna o index do último valor na array.

/*
const frutas = ['Maçã', 'Manga', 'Uva', 'Pera', 'Abacate', 'Uva', 'Mamão'];


console.log(frutas.includes('Pera')); // true
console.log(frutas.includes('Laranja')); // false
console.log(frutas.indexOf('Uva')); // 2
console.log(frutas.lastIndexOf('Uva')); // 5
*/



/* ======================================================== */
/* ======================================================== */


// [].join()
// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

/*
const frutas = ['Maçã', 'Manga', 'Uva', 'Pera'];


console.log(frutas.join(' - ')); // Maçã - Manga - Uva - Pera
*/



/* ======================================================== */
/* ======================================================== */


// [].slice()
// [].slice(início, final) retorna os itens da array começando pelo início e indo até o valor de final.

/*
const frutas = ['Maçã', 'Manga', 'Uva', 'Pera'];

console.log(frutas.slice(1, 3)); // ['Manga', 'Uva']
console.log(frutas.slice(2)); // ['Uva', 'Pera']

const cloneFrutas = frutas.slice();
console.log(cloneFrutas); // ['Maçã', 'Manga', 'Uva', 'Pera']
*/