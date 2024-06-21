const animaisLista = document.querySelector('.animais-lista')
const tabcontent = document.querySelectorAll('[data-tab="content"] section')
export default function scrollLista() {
    const scrollTop = animaisLista.scrollTop;
    if (scrollTop > 0 && scrollTop < 300) {
        tabcontent[0].classList.add('ativo', 'show-right')
        tabcontent[1].classList.remove('ativo', 'show-right')
    }
    else if (scrollTop > 300 && scrollTop < 600) {
        tabcontent[0].classList.remove('ativo', 'show-right')
        tabcontent[1].classList.add('ativo', 'show-right')
        tabcontent[2].classList.remove('ativo', 'show-right')

    }
    else if (scrollTop > 600 && scrollTop < 900) {
        tabcontent[1].classList.remove('ativo', 'show-right')
        tabcontent[2].classList.add('ativo', 'show-right')
        tabcontent[3].classList.remove('ativo', 'show-right')

    }
    else if (scrollTop > 900 && scrollTop < 1200) {
        tabcontent[2].classList.remove('ativo', 'show-right')
        tabcontent[3].classList.add('ativo', 'show-right')
        tabcontent[4].classList.remove('ativo', 'show-right')

    }
    else if (scrollTop > 1200 && scrollTop < 1500) {
        tabcontent[3].classList.remove('ativo', 'show-right')
        tabcontent[4].classList.add('ativo', 'show-right')
        tabcontent[5].classList.remove('ativo', 'show-right')

    }
    else if (scrollTop > 1500) {
        tabcontent[5].classList.add('ativo', 'show-right')
        tabcontent[4].classList.remove('ativo', 'show-right')
    }
}
animaisLista.addEventListener('scroll', scrollLista)