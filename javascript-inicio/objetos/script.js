// Objetos são conjuntos de variáveis e funções, mas no objeto elas possuem outros nomes: Propriedades (variáveis) e métodos (funções).


let pessoa = {
    nome: 'Gabriel',
    idade: 21,
    sexo: 'Masculino',
};


console.log(`Olá, sou o ${pessoa.nome} tenho ${pessoa.idade} de idade e sou do sexo ${pessoa.sexo}.`);


/* ========================================================================================== */


let quadrado = {
    lados: 4,
    area: function(comprimentoLado){
        console.log(comprimentoLado * comprimentoLado);
    },

    perimetro: function(comprimentoLado){
        console.log(this.lados * comprimentoLado);
    },
};


quadrado.area(10);
quadrado.perimetro(50);


/* ========================================================================================== */

// Objetos servem para organizar o código em pequenas partes reutilizáveis.

// Um exemplo de objeto (nativo do JavaScript) é o Math:

console.log(Math.random());

let pi = Math.PI;
console.log(pi);


// Dot notation get
// Acessa propriedades de um objeto à partir do ponto: .

/* QUANDO VOCÊ PEGA VALORES DE UM OBJETO, USAMOS O *GET*. MAS QUANDO SETAMOS UM VALOR A UM OBJETO, CHAMAMOS DE *SET*.*/


// GET

let menu = {
    width: 800,
    height: 50,
    backgroundcolor: '#000',
};


console.log(menu.backgroundcolor);

/* ======================================= */
// SET


let menu2 = {
    width: 800,
    height: 50,
    backgroundcolor: '#000',
};


menu.backgroundcolor = '#888';
console.log(menu.backgroundcolor);


// Para adicionar novas propriedades e métodos, basta chamar o objeto, adicionar o *.* e logo depois o novo valor:

//Lembrando que se o valor da propriedade já existir, o valor antigo irá ser substituido pelo novo.


let pessoa2 = {
    nome: 'Gabriel',
    sobrenome: 'Muquinho',
};


pessoa2.idade = 21;

console.log(pessoa2);


/* =============================================== */

// O *this* faz referência ao próprio objeto:

let numPadrao = 10;

let operacaoSoma = {
    numPadrao: 20,
    soma: function(num){
        console.log(numPadrao + num); // Irá puxar o valor *numPadrao* criado no escopo global (fora da função).

        console.log(this.numPadrao + num); // Irá puxar o valor *numPadrao* criado dentro do escopo da função.
    },
};


operacaoSoma.soma(10);