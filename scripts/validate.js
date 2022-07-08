enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
});

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        const inputs = form.querySelectorAll(config.inputSelector);
        form.addEventListener('submit', (event) => handleFormSubmit(event, form));
        inputs.forEach((input) => {
            input.addEventListener('input', (event) => handleFormInput(event, form, config));
        })
        toggleButton(form, config);
    });

}

function handleFormInput(event, form, config) {
    const input = event.target;
    const errorNodes = form.querySelectorAll(`#${input.id}-error`);
    errorNodes.forEach((errorNode) => {
        if (input.validity.valid) {
            errorNode.textContent = '';
            errorNode.classList.remove(config.errorClass);
        } else {
            errorNode.textContent = input.validationMessage;
            errorNode.classList.add(config.errorClass);
        }
        toggleButton(form, config);
    });
};

// function toggleWindowButton(window, config) {
//     const form = window.querySelector(config.formSelector);
//     toggleButton(form, config);
// }

function toggleButton(form, config) {
    const buttons = form.querySelectorAll(config.submitButtonSelector);
    buttons.forEach((button) => {
        if (!form.checkValidity()) {
            button.classList.add(config.inactiveButtonClass, !form.checkValidity());
        } else {
            button.classList.remove(config.inactiveButtonClass, !form.checkValidity());
        }
    }
    )};





