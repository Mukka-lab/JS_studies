// Escopo de função.
// Variáveis declaradas dentro de funções não são acessíveis fora da mesma.

// O escopo também serve para evitar conflitos entre variáveis com o mesmo nome.

function mostrarNome(){
    let nome = 'Gabriel';
    console.log(`Olá, me chamo ${nome}`);
};


mostrarNome();
// console.log(nome); //A variável *nome* foi declarada somente dentro do escopo da função, portanto só pode ser utilizada dentro da mesma.


// =========================================
// =========================================

// Variáveis criadas no escopo pai podem ser acessadas nas funções.

let esporte = 'Basquete';

function mostrarEsporte(){
    console.log(`Gosto de jogar ${esporte}!`);
};


mostrarEsporte();