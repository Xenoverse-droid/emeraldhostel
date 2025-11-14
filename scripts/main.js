import { deleteUser, getUserData } from "./test.js"



//Get the data from the form and send it to a data base / backend using 
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const passwordAgain = document.querySelector("#password-again")
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (password.value === passwordAgain.value) {
        fetchRequest();
    } else {
        alert('passwords arent the same')
    }
})



function getData() {
    return ({
        name: `${firstName.value} ${lastName.value}`,
        email: email.value,
        password: password.value
    })
}


async function fetchRequest() {
    try {
        const url = 'https://crudcrud.com/api/907ffe13d20b48da9313ba977260cf3c/users'
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getData())
        });

        const response = await request.json()
        console.log('created:', response);

    } catch (error) {
        console.log('Error', error)
    }

}

