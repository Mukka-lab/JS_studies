// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');


console.log(imagens);


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagemImagem = document.querySelectorAll('[src^="img/imagem"]');


console.log(imagemImagem);


// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');


console.log(linksInternos);


// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2_section = document.querySelector('.desc-animal');
const primeiroH2 = primeiroH2_section.querySelector('h2');


console.log(primeiroH2);


// Selecione o último p do site

const paragrafos = document.querySelector('p');


console.log(paragrafos[paragrafos.length - 1]);

/*
const ultimoParagrafo = paragrafos.querySelector('p:last-child');


console.log(ultimoParagrafo);
*/