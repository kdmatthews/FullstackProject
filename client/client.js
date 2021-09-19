function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector('.form-message')

    messsageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error")
    messageElement.classList.add(`form-message-${type}`)
};

function setInputElement(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error").textContent = message;
}




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

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputElement(inputElement, "username must be at least 10 characters.")
            }
        })
    })
})

