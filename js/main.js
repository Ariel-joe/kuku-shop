    const menuButton = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('menu');
    

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('hidden');
    })