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