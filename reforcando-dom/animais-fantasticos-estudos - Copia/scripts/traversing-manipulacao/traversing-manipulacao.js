// outerHTML - innerHTML - innerText
// Propriedades que retornam uma string contendo o HTML ou o texto.É possível atribuir um novo valor para as mesmas *element.innerText = 'Novo Texto'

/*
const titulo = document.querySelector('h1');

titulo.outerHTML; // Todo o html do elemento
titulo.innerHTML; // html interno
titulo.innerText; // texto, sem tags


titulo.innerText = '<h1>Texto</h1>'; // A tag vai como texto
titulo.innerHTML = '<h1>Texto</h1>'; // A tag é renderizada
titulo.outerHTML = '<p>Aoba</p>';


const descAnimais = document.querySelector('.desc-animal');

console.log(descAnimais.innerHTML);
console.log(' ========================================= ');
console.log(descAnimais.innerText);
*/


/* ====================================================== */
/* ====================================================== */

// Transversing
// Como navegar pelo DOM, utilizando suas propriedades e métodos

/*
const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.parentElement); // Pai
console.log(listaAnimais.parentElement.parentElement); // Pai do pai
console.log(listaAnimais.previousElementSibling); // Elemento acima
console.log(listaAnimais.nextElementSibling); // Elemento abaixo

console.log(listaAnimais.children); // HTMLCollection com os filhos
console.log(listaAnimais.children[0]); // Primeiro filho
console.log(listaAnimais.children[--listaAnimais.children.length]);


listaAnimais.querySelectorAll('li'); // Todas as li's
listaAnimais.querySelector('li:last-child'); // Último filho
*/


/* ====================================================== */
/* ====================================================== */

// Element vs Node
// ELement's representam um elemento HTML, ou seja, uam tag. Já o Node representa um nó, e pode ser um elemento (element), texto, comentário, quebra de linha e mais.

/*
const lista = document.querySelector('.animais-lista');

lista.previousElementSibling; // Elemento acima
lista.previousSibling; // Node acima

lista.firstChild; // Primeiro node child
lista.childNodes; // Todos os node child
*/


/* ====================================================== */
/* ====================================================== */

// Manipulando elementos
// É possível mover elementos no DOM com métodos de Node

/*
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = document.querySelector('titulo');


contato.appendChild(lista); // Move *lista* para o final de *contato*
contato.insertBefore(lista, titulo); // Insere a lista antes de titulo
contato.removeChild(titulo); // Remove *titulo* de *contato*
contato.replaceChild(lista, titulo); // Substitui *titulo* por *lista*
*/


/* ====================================================== */
/* ====================================================== */

// Novos elementos
// Podemos criar novos elementos com o método *createElement()*

/*
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);
*/


/* ====================================================== */
/* ====================================================== */

// Clonar elementos
//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método *cloneNode()*

/*
const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);
*/