// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade){
    this.andar = () => {
      console.log(`${this.nome} de ${this.idade} anos de idade andou!`);
    };
};
  
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
  
  
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos