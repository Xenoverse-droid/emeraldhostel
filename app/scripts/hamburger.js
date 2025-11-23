export function sideBarControl() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.side-bar');
    const mainApp = document.querySelector('.main-app');

    let showed = false;

    hamburger.addEventListener('click', () => {
        showed = true;
        sidebar.classList.remove('side-bar-go');
        sidebar.style.display = 'flex';
    });

    mainApp.addEventListener('click', () => {
        if (showed) {
            showed = false;
            sidebar.classList.add('side-bar-go');
            setTimeout(() => {
                sidebar.style.display = 'none';
            }, 250);
        }
    });
}
