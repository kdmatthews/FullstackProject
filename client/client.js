


function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector('.form-message')

    messsageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error")
    messageElement.classList.add(`form-message-${type}`)
};

function setInputElement(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").innerHTML = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove('form-input-error');
    inputElement.parentElement.querySelector(".form-input-error-message").innerHTML = "";
}

const createAccountForm = document.querySelector('#createAccount');

    


// .then(response => response.json())
// .then(userData => {
//     console.log('Success', userData)
// })
// .catch(error => {
//     console.error("Error", error)
// });






document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('#login');
    
    
    document.querySelector('#linkCreateAccount').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove('form-hidden');
    });

    document.querySelector('#linkLogin').addEventListener('click', e => {
        e.preventDefault();
        createAccountForm.classList.add('form-hidden')
        loginForm.classList.remove('form-hidden')

    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perfom your fetch Login

        setFormMessage(loginForm, "error", "Invalid")
    });
    
    
const createUser = async () => {
    const url = "/create_user"
    const user_name = document.querySelector("#signUpUsername").value;
    const password = document.querySelector("#signUpPassword").value;
    const userData = {
        user_name: user_name,
        password: password,
    };

    const createUserData = fetch("http://localhost:3001/create_user", {
        method: "POST",
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        
    });
};
    createAccountForm.addEventListener('submit', e => {
    e.preventDefault();
    createUser();
    // const request = new XMLHttpRequest();
    // request.open("post", "http://localhost:3001/create_user")
    // request.send(new FormData(createAccountForm));
    console.log("button was pressed")
});

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputElement(inputElement, "username must be at least 10 characters.")
            }
    
            })
            inputElement.addEventListener('input', e => {
                clearInputError(inputElement);
            })
    })
});
    