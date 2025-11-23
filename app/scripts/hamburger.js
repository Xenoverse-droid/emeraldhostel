export function sideBarControll() {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        document.querySelector('.side-bar').style.display = 'flex';
    })


    document.querySelector('.main-app').addEventListener('click', ()=> {
        document.querySelector('.side-bar').style.display = 'none';
    })
}