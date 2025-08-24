const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')


    const handleMenu = () => {
        /*if (!menu.style.transform) {
            menu.style.transform = 'translateX(0)'
        } else {
            menu.style.transform = ''
        }*/
        menu.classList.toggle('active-menu')
    }

    const scrolAnime = () => {
        handleMenu()
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    }

    menuBtn.addEventListener('click', handleMenu)

    closeBtn.addEventListener('click', handleMenu)

    menuItems.forEach(menuItem => menuItem.addEventListener('click', scrolAnime))
}

export default menu