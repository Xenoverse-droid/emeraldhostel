const navMenu =  document.querySelector('.nav-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.nav-close')


hamburgerMenu.addEventListener('click', ()=> {
    navMenu.style.display = 'flex';
})

hamburgerClose.addEventListener('click', ()=> {
    navMenu.style.display = 'none';
})

