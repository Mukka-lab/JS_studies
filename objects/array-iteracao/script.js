// [].forEach()
// [].forEach(callback(itemAtual, index, array))  a função de callback é executada para cada item da array. Ela possui três argumentos: *itemAtual*, que é o valor do item da array -- *index*, que é o index do valor da array -- e o *array* que é a array original.

/*
const frutas = ['Maçã', 'Uva', 'Pera', 'Manga'];

frutas.forEach(function(fruta){
    console.log(fruta.toUpperCase());
});


// Com arrow function:

frutas.forEach((fruta, index, array) => {
    console.log(fruta.toUpperCase());
});
*/



/* ========================================================== */
/* ========================================================== */


// Arrow function

/*
const lista = document.querySelectorAll('li');

lista.forEach((item) => {
    i.classList.add('ativa');
});


// Função normal

lista.forEach(function(item){
    i.classList.add('ativa');
});
*/



/* ========================================================== */
/* ========================================================== */


// Modificar a array original
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

/*
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
*/

// Neste caso é melhor utilizarmos o [].map()



/* ========================================================== */
/* ========================================================== */


// [].map()
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém a invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

/*
const frutas = ['Maçã', 'Uva', 'Pera', 'Manga'];

const newFrutas = frutas.map((fruta) => {
    return `Fruta: ${fruta}`;
});


console.log(frutas);
console.log(newFrutas);
*/


/* ========================================================== */

// Valor retornado
// Se não retornamos nenhum valor durante a iteração utilizando o map, o valor retornado como de qualquer função que não possui o return, será undefined.

/*
const frutas = ['Maçã', 'Uva', 'Pera', 'Manga'];

const newFrutas = frutas.map((fruta) => {
    const novaFruta = `Fruta: ${fruta}`;
});


console.log(newFrutas);
*/


/* ========================================================== */


// Arrow function e [].map()
// Uma arrow function de linha única e sem chaves irá retornar o valor após a fat arrow *=>*

/*
const numeros = [4, 6, 8];
const numerosX3 = numeros.map(numero => numero * 3);


console.log(numerosX3);
// Lembrando que funciona somente sem as chaves {}, caso use as chaves, irá retornar undefined.
*/


/* ========================================================== */
/* ========================================================== */

// [].map() VS [].forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map(), pois assim uma nova array com os valores modificados é retornada, e você pode imediatamente iterar novamente sobre estes valores.

/* ========================================================== */
/* ========================================================== */


// [].map() com objetos
// o map() pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

/*
const funcionarios = [
    {
        nome: 'João',
        salario: 3400,
    },
    {
        nome: 'Maria',
        salario: 3800,
    },
    {
        nome: 'Joana',
        salario: 4200,
    },
];


const salarios = funcionarios.map(funcionario => funcionario.salario);
// ou
const puxarNomes = funcionario => funcionario.nome;
const nomesFuncionarios = funcionarios.map(puxarNomes);


console.log(salarios); // [3400, 3800, 4200]
console.log(nomesFuncionarios); // ['João', 'Maria', 'Joana']
*/


/* ========================================================== */
/* ========================================================== */


// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da array. Existe um valor especial nessa função de callback, o *acumulador*, mas é apenas o retorno da iteração anterior.

/*
const numeros = [4, 6, 8];


const numeros1 = numeros.reduce((acumulador, atual) => {
    return acumulador + atual;
});

console.log(numeros1); // 18
*/

/* ====================================== */

/*
const numeros2 = numeros.reduce((acc, cur) => acc + cur, 100);

console.log(numeros2); // 118
*/


/* ========================================================== */
/* ========================================================== */


// Reduce passo a passo (parte 1)
// O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa ser o retornado pelo anterior.

/*
const aulas = [10, 25, 30];

// 1
aulas.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
aulas.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
aulas.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65
*/


/* ========================================================== */

// Reduce passo a passo 2
// Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começar a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.

/*
const aulas = [10, 25, 30];

// 1
aulas.reduce((10, 25) => {
  return 10 + 25;
}) // retorna 35

// 2
aulas.reduce((35, 30) => {
  return 35 + 30;
}) // retorna 65
*/


/* ========================================================== */
/* ========================================================== */


// [].reduceRight()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda.

/*
const frutas = ['Maçã', 'Uva', 'Manga'];

const frutasRight = frutas.reduceRight((acc, fruta) => `${acc} ${fruta}`);
const frutasLeft = frutas.reduce((acc, fruta) => `${acc} ${fruta}`);


console.log(frutasRight); // Manga Uva Maçã
console.log(frutasLeft); // Maçã Uva Manga
*/


/* ========================================================== */
/* ========================================================== */

// [].some()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true

/*
const frutas = ['Maçã', 'Uva', 'Manga'];

const temManga = frutas.some((fruta) => {
    return fruta === 'Manga';
});

console.log(temManga); // true
*/

/* ========================================================== */

/*
function maiorQue100(numero){
    return numero > 100;
};

const numeros = [6, 8, 20, 28, 99, 85];
const temMaior = numeros.some(maiorQue100);

console.log(temMaior); // false
*/



/* ========================================================== */
/* ========================================================== */


// [].every()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irpa retornar falso.

/*
const numeros = [2, 5, 800, 100, 20];
const maiorQue1 = numeros.every((numero) => numero > 1);
const menorQue1 = numeros.every((numero) => numero < 100);

console.log(maiorQue1); // true (Pois todos os returns são truthy)
console.log(menorQue1); // false (Pois um return é falsy)
*/


/* ========================================================== */
/* ========================================================== */

// [].find() - [].findIndex()
// [].find() retorna o valor atual da primeira iteração que retornar um valor truthy.
// [].findIndex() Ao invés de retornar o valor, retorna o index desse valor na array.

/*
const frutas = ['Abacate', 'Uva', 'Manga'];


const buscaUva = frutas.findIndex((fruta) => {
    return fruta === 'Uva';
});

console.log(buscaUva); // 1
*/

/* ========================================================== */

/*
const numeros = [2, 5, 800, 100, 20];


const buscaMaior50 = numeros.find((numero) => numero > 50);

console.log(buscaMaior50); // 800 (Pois é o primeiro número da array que é maior que 50)
*/



/* ========================================================== */
/* ========================================================== */


// [].filer()
// [].filter(), retorna uma array com uma lista de valores que durante a sua iteração retornaram um valor truthy.

/*
const numeros = [2, 8, 92, '', 58, 180, null];
const limpaArray = numeros.filter((numero) => {
    return numero;
});

console.log(limpaArray); // [2, 8, 92, 58, 180]
*/

/* ========================================================== */

/*
const numeros = [2, 8, 92, 58, 180];
const buscaMaior50 = numeros.filter((numero) => numero > 50);

console.log(buscaMaior50); // [92, 58, 180]
*/



/* ========================================================== */
/* ========================================================== */


// filter em objetos

/*
const funcionarios = [
    {
        nome: 'João',
        salario: 3400,
    },
    {
        nome: 'Maria',
        salario: 3800,
    },
    {
        nome: 'Joana',
        salario: 4200,
    },
];


const salarioAlto = funcionarios.filter((funcionario) => {
    return funcionario.salario > 3500;
});


console.log(salarioAlto); // {nome: 'Maria', salario: 3800}, {nome: 'Joana', salario: 4200}
*/