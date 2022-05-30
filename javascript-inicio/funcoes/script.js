let idade = 21;

if(idade >= 18 && idade <= 150){
    console.log('Maior de idade!');
} else if(idade <= 17 && idade >= 0){
    console.log('Menor de idade!');
} else{
    console.log('Idade inválida!');
}

// ========================

let nome = 'Gabriel';


if(nome != 'Gabriel'){
    console.log('Você não é o Gabriel');
} else{
    console.log('Olá Gabriel!');
};


/* ======================================================== */


// OPERADORES LÓGICOS

// && = e
// || = ou


/* ======================================================== */


// Usando o switch case

let corFavorita = 'roxo';


switch(corFavorita){
    case 'roxo':
        console.log('Roxo é muito bonito!');
        break;
    case 'azul':
        console.log('Azul é muito bonito!');
        break;
    case 'vermelho':
        console.log('Vermelho é muito bonito!');
        break;
    default:
        console.log('Esta cor é muito bonita!');
        break;
};