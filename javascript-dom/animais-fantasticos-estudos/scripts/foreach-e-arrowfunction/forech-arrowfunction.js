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