/* Write code that checks that the firstName input's value is at least 2 characters long when the form is submitted.

Show/hide the error message every time the validation runs. */

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateInput);

function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= 2) {
        return true;
    } else {
        return false;
    }
}

function validateInput(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}
