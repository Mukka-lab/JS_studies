// addEventListener
// Adiciona uma função ao elemento, chamada de *callback*, que será ativada assim que um certo *evento* ocorrer neste elemento.

/*
const img = document.querySelector('img');
// elemento.addEventListener(event, callback, options);
// O terceiro parâmetro (options) é opcional

img.addEventListener('click', () => {
    console.log('Clicou');
});
*/

// Também podemos criar a função fora do evento e usar ela dentro do evento:

/*
function callback(){
    console.log('clicou');
};

img.addEventListener('click', callback);
*/


/* ===================================================================== */
/* ===================================================================== */

// event
// O primeiro parâmetro do callback é referente ao evento que ocorreu.

/*
const img = document.querySelector('img');

function callback(event){
    console.log(event);
};

img.addEventListener('click', callback);
*/


/* ===================================================================== */
/* ===================================================================== */

/*
const listaAnimais = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget); // this
    console.log(event.target); // onde o click ocorreu
    console.log(event.type);  //tipo de evento
    console.log(event.path);
};


listaAnimais.addEventListener('click', callbackLista);
*/


/* ===================================================================== */

//event.preventDefault()
// Previne o comportamento padrão do evento no browser. Por exemplo um link externo, irá prevenir que o link seja ativado.

/*
const linkExterno = document.querySelector('a[href^="http"]');

function clicaLink(event){
    event.preventDefault();
    console.log(event.currentTarget.href);
};


linkExterno.addEventListener('click', clicaLink);
*/


/* ===================================================================== */


//this
// A palavra chave *this* é uma palavra especial do JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos ela fará referência ao elemento em que o *addEventListener* foi adicionado.

/*
const img = document.querySelector('img');

function callback(event){
    console.log(this); // Retorna a imagem
    console.log(this.getAttribute('src'));
};


img.addEventListener('click', callback);
*/


/* ===================================================================== */


// Vários eventos
// Existem diversos eventos, como: 'click', 'scroll', 'resize', 'keydown', 'keyup', 'mouseenter' e etc. Eventos podem ser adicionados a diferentes elementos, como *window* e *document* também.

/*
const h1 = document.querySelector('h1');

function callback(event){
    console.log(event.type, event);
};


h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);
*/


/* ===================================================================== */


// Keyboard
// Você pode adicionar atalhos para facilitar a navegação do seu site, através de eventos do *keyboard*

/*
function handleKeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul');
    } else if(event.key === 'v'){
        document.body.classList.toggle('vermelho');
    };
};


window.addEventListener('keydown', handleKeyboard);
*/


/* ===================================================================== */


// forEach e eventos
// O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles

const imgs = document.querySelectorAll('img');

function imgSrc(event){
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
};


imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});