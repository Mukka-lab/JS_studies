// Prototype
// A propriedade prototype é um objeto adicionado em uma função quando a mesma é criada.

/*
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
};


const gabriel = new Pessoa('Gabriel', 21);


console.log(typeof Pessoa());
console.log(Pessoa.prototype); // Retorna o objeto
console.log(' ======================================= ');
console.log(typeof gabriel);
console.log(gabriel.prototype); // undefined // Retornou undefined, pois "gabriel" é um objeto, não uma função.

// Lembrando que o *prototype* pertence somente as funções.
*/


/* ============================================================== */
/* ============================================================== */

// function.prototype
// É possível adicionar novas propriedades e métodos ao objeto prototype.

/*
Pessoa.prototype.andar = function(){
    return `${this.nome} andou!`;
};

Pessoa.prototype.nadar = function(){
    return `${this.nome} nadou!`;
};


console.log(Pessoa.prototype); // Irá retornar o objeto
*/


/* ============================================================== */
/* ============================================================== */

// Acesso ao protótipo
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é apenas uma propriedade de funções.

/*
const gabriel = new Pessoa('Gabriel', 21);

console.log(gabriel.nome);
console.log(gabriel.idade);
console.log(gabriel.andar());
console.log(gabriel.nadar());

console.log(gabriel.__proto__.andar()); // Isso é tarefa apenas do navegador, nunca utilize isso no código.
*/


/* ============================================================== */
/* ============================================================== */

// Construtores nativos
// Objetos, funções, números, strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessados pelo tipo de dado.

/*
const pais = 'Brasil';
const cidade = new String('São Paulo');


console.log(pais.charAt(0));
console.log(cidade.charAt(0));

console.log(String.prototype);
*/


/* ============================================================== */
/* ============================================================== */

// É possível acessar a função do protótipo
// É comum, principalmente em códigos mais antigos, o so direto de funções do protótipo do construtor Array.

/*
const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

// Existe o método Array.from()
*/


/* ============================================================== */
/* ============================================================== */

// Método do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao Protótipo

/*
Array.prototype.slice.call(lista); // jeito antigo de transformar um elemento em array
Array.from(lista); // Jeito atual


// Retorna uma lista com os métodos e propriedades
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

// dado.constructor.name, retorna o nome do construtor
*/


/* ============================================================== */

// Apenas os métodos do protótipo são herdados

/*
[1, 2, 3].slice(); // Existe
[1, 2, 3].from(); // Não existe
*/


/* ============================================================== */
/* ============================================================== */

// Entenda o que está sendo retornado
// Os métodos e propriedades acessados com . são referentes ao tipo de dado que é retornado antes desse .

const carro = {
    marca: 'Ford',
    preco: 20000,
    acelerar: () => {
        return true;
    },
};


console.log(carro); // Object
console.log(carro.marca); // String
console.log(carro.preco); // Number
console.log(carro.acelerar); // Function
console.log(carro.acelerar()); // Boolean
console.log(carro.marca.charAt(0)) // Function;