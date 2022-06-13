// Objetos
// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior?

/*
const doce = {
    nome: 'Brigadeiro',
    preco: 3.50,
};

const sorvete = doce;
sorvete.nome = 'Sorvete';
sorvete.preco = 8.99;

const bolo = doce;
bolo.nome = 'Bolo de Chocolate';
bolo.preco = 75.99;
*/

// Note que os valores são substituidos, mas não é isso que queremos.


/* ========================================================= */
/* ========================================================= */

// Para resolvermos o problema acima, utilizamos uma função construtora.

// Construct Function
// Funções construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

/*
function Doce(){
    this.nome = 'Brigadeiro';
    this.preco = 3.50;
};

const sorvete = new Doce();
sorvete.nome = 'Sorvete de morango';
sorvete.preco = 8.99;
sorvete.comer = () => {
    console.log('Comeu o sorvete');
};


const bolo = new Doce();
bolo.nome = 'Bolo de chocolate';
bolo.preco = 75.99;
*/


/* ========================================================= */
/* ========================================================= */

// New Keyword
// A palavra chave *new* é responsável por criar um novo objeto baseado na função que passamos a frente dela.
// Veja o passo a passo do que o comando *new* faz:

/*
function Carro(){};

const honda = new Carro();

// 1- Cria um novo objeto
honda = {};

// 2- Define o protótipo
honda.prototype = Carro.prototype;

// 3- Aponta a variável *this* para o objeto
this = honda;

// 4- Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5- Retorna o novo objeto
return honda = {
    marca: 'Marca',
    preco: 0,
};
*/


/* ========================================================= */
/* ========================================================= */

// This Keyword
// O *this* faz referência ao próprio objeto construido com a *Constructor Function*

/*
function Carro(marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
};

const honda = new Carro('Honda', 45000);
*/

// Variáveis dentro da constructor estão "protejidas".


/* ========================================================= */
/* ========================================================= */

// Exemplo Real
// Quando mudamos a propriedade seletor, o objeto DOM irá passar a selecionar o novo seletor em seus métodos.

/*
const Dom = {
    seletor: 'li',
    element(){  // Mesma coisa que element: function(){}
        console.log(document.querySelector(this.seletor));
    },
    ativar(){
        this.element().classList.add('ativo');
    },
};



Dom.ativar(); // Adiciona *ativo* ao li
Dom.seletor = 'ul';
//Dom.ativo(); // Adiciona *ativo* ao ul
*/

/* ========================================================= */

function Dom(seletor){
    this.element = function(){
        return document.querySelector(seletor);
    };
    this.ativar = function(){
        this.element().classList.add('ativo');
    };
};


const li = new Dom('li');
const ul = new Dom('ul');