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


const createUser = async () => {
    const url = "http:localhost:3001/create_user"
    const username = document.querySelector("#signUpUsername").value;
    const password = document.querySelector("#signUpPassword").value;
    const userData = {
        username,
        password,
    };
    // console.log(userData)

    const createTheUser = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userData),
    });


};




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

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perfom your fetch Login

        setFormMessage(loginForm, "error", "Invalid")
    });
    
    const createUserButton = document.querySelector('#create-user')
    createUserButton.addEventListener('click', e => {
    e.preventDefault();
    createUser();
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
    