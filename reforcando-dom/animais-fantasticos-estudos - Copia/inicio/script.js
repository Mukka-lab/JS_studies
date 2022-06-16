// DOM significa *Document Object Model*.
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo desses documentos:

console.log(window);
// Window é o objeto global do navegador
// Possui diferentes métodos e propriedades

/*

window.innerHeight;
window.alert('Olá');


// window e document são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert('Olá');
alert('Assim também funciona!');
// o window é um objeto global, então não é necessário colocar ele antes do método ou propriedade.

*/

/* ====================================================== */
/* ====================================================== */

let h1html = document.querySelector('#title');

h1html.addEventListener('click', function(){
    document.querySelector('#title').innerHTML = `Clicou em ${h1html.innerText}`;
});