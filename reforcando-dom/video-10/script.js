const area = document.querySelector('.area2');

function mudaCor(){
    area.classList.toggle('roxo');
};

area.addEventListener('click', mudaCor);