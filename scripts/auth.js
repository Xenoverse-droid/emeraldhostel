const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginForm = document.querySelector('.login-form');


async function getUserInfo() {
    try {
        const getRequest = await fetch(`https://691f721731e684d7bfc9c163.mockapi.io/users?email=${email.value}`);
        const data = await getRequest.json();
        console.log(data[0])

        if (password.value !== data[0].password) {
            password.value = 'INCORRECT PASSWORD';
            password.style.color = 'red';
            setTimeout(() => {
                password.value = '';
                password.style.color = 'black';
            }, 2000)
        } else if (email.value === data[0].email && password.value === data[0].password) {
            localStorage.setItem('userinfo', JSON.stringify(data[0].name));
            document.querySelector('.modal').style.display = 'flex';
            window.location.href = './app/main.html';
        } else {
            return;
        }
    } catch (error) {
        console.error('Error fetching user')
    }
}




function redFormData() {
    document.querySelectorAll('input').forEach((input) => {
        if (input.value.length === 0) {
            input.value = `PLEASE FILL THIS FIELD`;
            input.style.color = 'red';
            setTimeout(() => {
                input.value = '';
                input.style.color = 'black';
            }, 2000)
        } else {
            getUserInfo();
        }
    })
}


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    redFormData();
})