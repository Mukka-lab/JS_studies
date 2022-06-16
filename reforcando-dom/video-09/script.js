const title = document.querySelector('.title');

function mudaTitulo(){
    title.innerHTML = 'Mudou o título!';
    title.classList.toggle('ativo');
};

title.addEventListener('click', mudaTitulo);