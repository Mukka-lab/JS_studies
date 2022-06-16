function animacaoScroll(){
    const sections = document.querySelectorAll('.js-animacao-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;
        const activeClass = 'ativo';

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if(isSectionVisible){
                    section.classList.add(activeClass);
                } else{
                    section.classList.remove(activeClass);
                };
            });
        };


        animaScroll();


        window.addEventListener('scroll', animaScroll);
    };
};


animacaoScroll();