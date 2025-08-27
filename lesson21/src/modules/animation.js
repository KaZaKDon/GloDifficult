const animation = () => {
    console.log('animation');
    document.querySelector('.scroll-down').scrollIntoView({
            behavior: 'smooth'
        });
}

export default animation