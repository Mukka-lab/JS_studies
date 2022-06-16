/* ==================================================================================================== */


// Manipulando classes e atributos

// Um dos mais utilizados é o *classlist*, onde retorna uma lista com as classes do elemento. Permite também adicionar, remover e verificar se contém a classe.

/*
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

// Teste

const titulos = document.querySelector('.titulo');


if(titulos.classList.contains('maiusculo')){
    titulos.classList.remove('maiusculo');
} else{
    titulos.classList.add('maiusculo');
};


console.log(titulos.classList);

console.log(titulos.classList.replace('maiusculo', 'minusculo'));

console.log(titulos.classList);
*/

/* =========================================================================================== */

// Atributtes

// Retorna uma array-like com os atributos do elemento

const animais = document.querySelector('.animais');

console.log(animais.attributes); // Retorna todos os atributos
console.log(animais.attributes[1]); // Retorna o atributo selecionado.


// =======================================

//getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado.

const img = document.querySelector('img');


console.log(img.getAttribute('src')); // Valor do src

img.setAttribute('alt', 'Outro texto'); // Cria o atributo que não existe e substitui se o atributo for existente.

console.log(img.hasAttribute('id')); // Retorna true ou false

img.removeAttribute('alt'); // Remove o alt

img.hasAttributes(); // true ou false se tem algum atributo


/* *********************************************** */
/* Métodos de get e set são muito comuns! */
/* *********************************************** */