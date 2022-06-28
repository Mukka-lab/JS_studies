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
// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

/*
const novoSeletor = {
    element: document.querySelector('li')
  }
  
  Dom.prototype.ativo.call(novoSeletor, 'ativar');
*/



/* ============================================================ */
/* ============================================================ */


// Array e call()
// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objtos que se parecem com uma Array (array-like).

/*
Array.prototype.mostreThis = function() {
    console.log(this);
  }
  
  const frutas = ['Uva', 'Maçã', 'Banana'];
  frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']
  
  Array.prototype.pop.call(frutas); // Remove Banana
  frutas.pop(); // Mesma coisa que a função acima
*/



/* ============================================================ */
/* ============================================================ */


// Array-like
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

/*
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo
*/



/* ============================================================ */
/* ============================================================ */


// Function.apply()
// O .apply(this, [arg1, arg2, ...]) funciona como o .call(), porém a diferença é que os argumentos da função são passados através de uma array.

/*
const numeros = [2, 6, 8, 98, 20, 56];

console.log(Math.max.apply(null, numeros));
console.log(Math.max.call(null, 5, 10, 15, 20));


// Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar
*/



/* ============================================================ */
/* ============================================================ */

// Apply vs Call
// A única diferença é que o .apply() usa uma array para passar os argumentos para a função.

/*
const li = document.querySelectorAll('li');

function possuiAtivo(item){
    return item.classList.contains('ativo');
};


const filtroCall = Array.prototype.filter.call(li, possuiAtivo);
const filtroApply = Array.prototype.filter.apply(li, [possuiAtivo]);
*/



/* ============================================================ */
/* ============================================================ */


// Function.bind()
// Diferente da call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto do this.

/*
const li = document.querySelectorAll('li');

const filtroLi = Array.prototype.filter.bind(li, function(item){
    return item.classList.contains('ativo');
});


filtroLi();
*/



/* ============================================================ */
/* ============================================================ */


// Argumentos e bind
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.

/*
const carro = {
    marca: 'BMW',
    ano: 2020,
    acelerar: function(aceleracao, tempo){
        return `${this.marca} acelerou ${aceleracao} km/h em ${tempo} segundos!`;
    },
};


console.log(carro.acelerar(200, 20));
*/

/* ============================================================ */

/*
const honda = {
    marca: 'Honda',
};


const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(200, 30));
*/



/* ============================================================ */
/* ============================================================ */


// Argumentos comuns
// Podemos passar argumentos padrões para uma função e retornar uma nova função

function imc(peso, altura){
    return peso / (altura * altura);
};

console.log(imc(1.75, 80));

/* ============================================================ */

const imc170 = imc.bind(null, 1.70);

console.log(imc170(70));