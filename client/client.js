

// The following functions are used for changing the form-message when a user is entering information.
// It is designed to give the user error messages or success messages. 
// In this project I only have one error message displayed as I decided it was best to put my time into
// other pieces of this project. However more can be added.
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

// These are the event listeners for the sign in and create acount links.
// When either link is pressed the page will switch to the other form.

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

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
   
    // The createUser function fetches the route creat user and links to the users database.
    // When a user submits their username and password it will be sent to the database.
    const createUser = async () => {
        const user_name = document.querySelector("#signUpUsername").value;
        const password = document.querySelector("#signUpPassword").value;
        const userData = {
            user_name: user_name,
            password: password,
        };
       
        const createUserData = await fetch("http://localhost:3001/create_user", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            
            
        });
       
    };
        createAccountForm.addEventListener('submit', e => {
        e.preventDefault();
        createUser();
        createAccountForm.classList.add('form-hidden')
        loginForm.classList.remove('form-hidden')

       
    });
    
// This is the one error message I used for the create account page. 
// It displays a message when the username is less than 10 characters.
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
})
    


