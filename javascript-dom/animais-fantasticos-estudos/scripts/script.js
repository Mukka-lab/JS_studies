/* ==================================================================================================== */
// SELECIONANDO ELEMENTOS


// *getElementById* Seleciona e retorna elementos do DOM

// Seleciona pelo ID
const sectionAnimais = document.getElementById('animais');
const sectionContato = document.getElementById('contato');

// Retorna *null* caso não exista
const naoExiste = document.getElementById('inexistente');


/* ============================================== */
// *getElementsByClassName* Seleciona e retorna uma lista de elementos do DOM

// Seleciona pela class
const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[2]);


/* ============================================== */
/* ============================================== */

// *querySelector* Retorna o primeiro elemento que combinar com o seu seletor CSS

const animais = document.querySelector('#animais');
const faq = document.querySelector('#faq');
const primeiroUl = document.querySelector('ul');

// Busca dentro do ul apenas:
const navItem = primeiroUl.querySelector('li');


/* ============================================== */

// *querySelectorAll* Retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

const gridSectionAll = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');


/* ==================================================================================================== */
/* ==================================================================================================== */


// FOREACH E ARROW FUNCTION

// Parâmetros do forEach
// O primeiro parâmetro é o *callback*, ou seja, a função que irá ser ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array.


const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
    console.log(`${valorAtual} -- ${index} -- ${array}`);
    console.log('================================');
});


/* ============================================== */

// forEach é um método de array, alguns objetos array-like possuem esse método. Caso não possua, o ideal é transformá-lo em um array.

const titulos_arrayLike = document.getElementsByClassName('titulo');

const titulosArray = Array.from(titulos_arrayLike);


titulosArray.forEach(function(titulo){
    console.log(titulo);
});


/* ==================================================================================================== */

// Arrow function
// É uma forma simplificada da *function expression*. Basta remover a palavra chave *function* e adicionar a *fat arrow: =>* após os argumentos.

imgs.forEach((imagem) => {
    console.log(imagem);
})


/* ==================================================================================================== */
/* ==================================================================================================== */


// Manipulando classes e atributos

// Um dos mais utilizados é o *classlist*, onde retorna uma lista com as classes do elemento. Permite também adicionar, remover e verificar se contém a classe.


const menu = document.querySelector('.menu');

console.log(menu.className); // Retorna uma string
console.log(menu.classList); // Retorna uma lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // Duas classes
console.log(menu.classList);

menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // Se existir *remove*, se não existir *adiciona*
menu.classList.contains('ativo'); // Retorna true ou false
menu.classList.replace('ativo', 'inativo'); // Substitui a classe
console.log(menu.classList);