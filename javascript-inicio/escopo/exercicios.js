// Por qual motivo o código abaixo retorna com erros?

/*
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  
  console.log(var, marca, portas);
*/

{
    var cor = 'Preto';
    const marca = 'Fiat';
    let portas = 4;

    console.log(`O carro é um ${marca} ${cor} com ${portas} portas!`);
};


console.log('======================================');
  // Como corrigir o erro abaixo?

/*
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);
*/

const dois = 2;
  

function somarDois(x) {
  console.log(x + dois);
};

function dividirDois(x) {
  console.log(x / dois);
};


somarDois(4);
dividirDois(6);


console.log('======================================');
  // O que fazer para total retornar 500?

/*
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
*/


var numero = 50;
  
for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);