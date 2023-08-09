const inputPassword = document.querySelector('[data-password]');
const inputConfirmPassword = document.querySelector('[data-password-confirmation]');
const submitButton = document.querySelector('[data-submit-button]');
const divPassword = document.querySelector('[data-password-div]');

submitButton.addEventListener('click', (e) => {
    if (inputPassword.value !== inputConfirmPassword.value) {
        inputPassword.classList.add('error');
        inputConfirmPassword.classList.add('error');
        divPassword.classList.add('error-message');
    }
})