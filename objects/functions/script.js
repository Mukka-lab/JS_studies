// Functions
// Toda função é criada com o construtor function e por isso herda suas propriedades e métodos

/*
function areaQuadrado(lado){
    lado * lado
};


const perimetroQuadrado = new Function('lado', 'return lado * 4');
*/


/* ============================================================ */
/* ============================================================ */


// Propriedades
// Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função

/*
function Soma(n1, n2){
    return n1 + n2
};


console.log(Soma.length); // 2
console.log(Soma.name); // 'Soma'
*/


/* ============================================================ */
/* ============================================================ */


// Function.call()
// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma

/*
const carro = {
    marca: 'Ford',
    ano: 2018,
};


function descCarro(){
    console.log(`${this.marca} ${this.ano}`);
};


console.log(descCarro()); // undefined undefined
console.log(descCarro.call()); // undefined undefined
console.log(descCarro.call(carro)); // Ford 2018
*/



/* ============================================================ */
/* ============================================================ */


// This
// O valor de *this* faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

/*
const carros = ['Fiat', 'Ford', 'BMW'];

carros.forEach((carro) => {
    console.log(carro);
});

console.log('==============================================');

carros.forEach.call(carros, (carro) => {
    console.log(carro);
});

console.log('==============================================');

const frutas = ['Maçã', 'Pera', 'Manga', 'Uva'];

frutas.forEach.call(frutas, (fruta) => {
    console.log(fruta);
});
*/


/* ============================================================ */

// Utilizando um exemplo real
// O objeto atribuido a *lista* será o substituido pelo primeiro argumento de *call()*

/*
function Dom(seletor){
    this.element = document.querySelector(seletor);
};


Dom.prototype.ativo = function(classe){
    this.element.classList.add(classe);
};


const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);
*/



/* ============================================================ */
/* ============================================================ */


// O objeto deve ser parecido
// 