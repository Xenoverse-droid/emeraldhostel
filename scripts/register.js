const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const generalInput = document.querySelectorAll('input');
const password = document.querySelector("#password");
const passwordAgain = document.querySelector("#password-again");
const registerForm = document.querySelector('.register-form');


// revisit and check the button logic
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let hasEmpty = false;


    generalInput.forEach((input) => {
        if (input.value.trim() === '') {
            hasEmpty = true;
            input.style.color = 'red';
            input.value = 'Please fill this field';
            setTimeout(() => {
                input.value = '';
                input.style.color = 'black';
            }, 1000)
        }
    })

    if (hasEmpty) return; // stops execution

    if (password.value !== passwordAgain.value) {
        password.value = 'Passwords arent the same';
        passwordAgain.value = 'Passwords arent the same';
        
        password.style.color = 'red';
        passwordAgain.style.color = 'red';

        setTimeout(() => {
            password.value = '';
            passwordAgain.value = '';
            password.style.color = 'black';
            passwordAgain.style.color = 'black';
        }, 1000)

        return;
    }
    await sendData();
    window.location.href = './login.html'; // change to the login.html
});

// get the user data 
function getData() {
    return {
        name: `${lastName.value}`,
        email: email.value,
        password: password.value
    }
}

async function sendData() {
    try { // checks weather user exists in the data base
        const emailCheck = await fetch(`https://691f721731e684d7bfc9c163.mockapi.io/users?email=${email.value}`);
        const checkedData = await emailCheck.json();
        console.log(checkedData);

        if (checkedData[0].email === email.value) {
            email.value = 'USER ALREADY EXIST';
            email.style.color = 'red';
            setTimeout(() => {
                email.value = '';
                email.style.color = 'red';
                return ;
            }, 2000)
             window.location.href = './login.html'; // change to the login.html
        } else {
            try {
                const postRequest = await fetch('https://691f721731e684d7bfc9c163.mockapi.io/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(getData())
                });
                const response = await postRequest.json()
                console.log('DATA SUBMITTED', response)
                document.querySelector('.modal').style.display = 'flex';

            } catch (error) {
                console.error('DATA NOT SUBMITED')
            }
        }

    } catch (error) {
        console.error('user noe exist')
    }
}


