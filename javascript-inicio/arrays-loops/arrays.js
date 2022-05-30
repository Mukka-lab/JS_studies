// Array são um grupo de valores geralmente relacionados. Servem para amarzenar diferentes valores em uma única variável.

let frutas = ['Banana', 'Maçã', 'Uva', 'Manga', 'Abacate'];

console.log(`Gosto de ${frutas[0]} e ${frutas[2]}!`);

// Um array é um objeto, isso significa que ele pode ter métodos, aqui estão alguns:

//frutas.pop(); // Remove o último item e retorna ele
//console.log(frutas);

frutas.push('Laranja'); // Adiciona um novo item ao final do array;
console.log(frutas);

console.log(frutas.length); // Retorna o número de items no array.



// LOOP FOR

// O loop for repete algo até uma condição ser atingida.

/*
for(let num = 0; num <= 10; num++){
    console.log(num);
};
*/

// O loop for possui partes:
// Início - Condição - Incremento


/* ====================================================== */

// Também temos o LOOP WHILE:

/*
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
};
*/

// Vale lembrar que o loop for é mais comumente usado!


/* =================================================== */
/* =================================================== */

// Utilizando loop em arrays
/*
for(i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};
*/

/* ======================================= */

for(i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Uva'){
        break;
    };
};


/* ======================================= */
/* ======================================= */

// O foreach é um método que executa uma função para cada item do array. É uma forma mais simplificada de usarmos loops em arrays (array-like).

let cores = ['Azul', 'Roxo', 'Vermelho', 'Preto', 'Branco'];

cores.forEach(function(cor, i){
    console.log(`${cor} - ${i}`);
});

// =======================================