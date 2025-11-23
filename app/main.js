import { getRooms } from "./scripts/room-booking.js";
import { sideBarControll } from "./scripts/hamburger.js";
// NAV BAR CONTROLLER


sideBarControll();

function getUserinfo() {
    return JSON.parse(localStorage.getItem('userinfo'));
}

function displayUserInfo() {
    document.querySelector('.user-name').textContent = getUserinfo();
}

displayUserInfo();


//  The block of code controlling the buttons
async function waitForPage() {
    let roomsContainer = document.querySelector('.select-btn-containter');
    const rooms = await getRooms();
    let roomOutput = ''
    rooms.forEach((room) => {
        let roomHtml = `<button data-room="${room['room-number']}" class="room-select-btn"><img src="app-icons/room-status/room-available1.png"
                    alt="room available">
                <p class="room-number">${room['room-number']}</p>
            </button>`
        roomOutput += roomHtml
    })

    roomsContainer.innerHTML = roomOutput;

    // button image change controller
    const roomButtons = document.querySelectorAll('.room-select-btn');


    roomButtons.forEach((button)=>{
        button.addEventListener('click', ()=> {
            roomButtons.forEach((btn)=>{
                btn.querySelector('img').src = "app-icons/room-status/room-available1.png";
            })

            button.querySelector('img').src = "app-icons/room-status/room-selected.png";
            const selectedRoom = button.dataset.room;
            console.log("Selected room:", selectedRoom);
        })
    })

}

// MENU BUTTON CONTROLLER
const sideButtons = document.querySelectorAll(".side-buttons");
const contentArea = document.querySelector('.main-app');


sideButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page
        fetch(`pages/${page}`)
            .then((res) => {
                return res.text()
            }).then((data) => {
                contentArea.innerHTML = data;
                waitForPage()
            }).catch((err) => {
                console.log(err)
                contentArea.innerHTML = '<p>Error loading page</p>'
            })
    });
});


document.querySelector('.logout').addEventListener('click', ()=>{
    window.location.href = '../login.html'
})