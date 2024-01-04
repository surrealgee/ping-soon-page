// Nodes

const emailField = document.querySelector('.email-field');
const successDisplay = document.querySelector('.success-display');
const errorDisplay = document.querySelector('.error-display');
const submitBtn = document.querySelector('#submit-btn');

// Handlers

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isValid = validateEmail(emailField.value)

    if (isValid) {
        successDisplay.classList.add('show');
        errorDisplay.classList.remove('show');
        emailField.value = '';
    } else {
        errorDisplay.classList.add('show');
        successDisplay.classList.remove('show');
    }
});

// Functions

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}