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

