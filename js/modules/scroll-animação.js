export default function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < 600) {
                    section.classList.add('ativoScroll');
                } else {
                    section.classList.remove('ativoScroll')
                }
            })
        }
        
        window.addEventListener('scroll', animaScroll);
    }
}

