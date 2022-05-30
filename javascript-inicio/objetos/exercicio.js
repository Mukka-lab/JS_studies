// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Muquinho',
    idade: 21,
};


console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);


// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.mostrarNome = function(){
    return `${this.nome} ${this.sobrenome}`;
};


console.log(pessoa.mostrarNome());


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;


console.log(carro.preco);
  
  // Crie um objeto de um cachorro que represente um labrador preto com 10 anos, e que late ao ver uma pessoa

let cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir: function(viuPessoa){
        if(viuPessoa === 'sim'){
            console.log('Latiu');
        } else if(viuPessoa === 'não'){
            console.log('Não latiu');
        } else{
            console.log('O cachorro ficou confuso');
        }
    },
};


cachorro.latir('sla');