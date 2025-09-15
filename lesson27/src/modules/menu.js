const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    const handleMenu = (e) => {
        if (
            e.target.closest('.menu') ||
            e.target.closest('.close-btn') ||
            e.target.closest('ul > li > a')
        ) {
            menu.classList.toggle('active-menu');
            }
    };

    menuBtn.addEventListener('click', handleMenu);

    menu.addEventListener('click', handleMenu);
    document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('active-menu');
    }
});
}

    /*const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')


    const handleMenu = () => {
        if (!menu.style.transform) {
            menu.style.transform = 'translateX(0)'
        } else {
            menu.style.transform = ''
        }
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)

    closeBtn.addEventListener('click', handleMenu)

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))*/

export default menu