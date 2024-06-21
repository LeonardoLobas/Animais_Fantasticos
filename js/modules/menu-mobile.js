export default function initMenuMobile() {
    
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const html = document.documentElement;
    
    function openMenu(event) {
        event.stopPropagation();
        menuList.classList.toggle('ativo');
        menuButton.classList.toggle('ativo');
        if (menuList.classList.contains('ativo')) {
            document.addEventListener('touchstart', touchOutside);
        } else {
            document.removeEventListener('touchstart', touchOutside);
        }
    }
    
    function touchOutside(event) {
        if (!menuList.contains(event.target) && !menuButton.contains(event.target)) {
            menuList.classList.remove('ativo');
            menuButton.classList.remove('ativo');
            document.removeEventListener('touchstart', touchOutside);
        }
    }
    
    menuButton.addEventListener('touchstart', openMenu);
}








