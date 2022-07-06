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
            errorNode.classList.remove('popup__error_visible');
        } else {
            errorNode.textContent = input.validationMessage;
            errorNode.classList.add('popup__error_visible');
        }
        toggleButton(form, config);
    });
};

function toggleWindowButton(window, config) {
    const form = window.querySelector(config.formSelector);
    toggleButton(form, config);
}

function toggleButton(form, config) {
    const buttons = form.querySelectorAll(config.submitButtonSelector);
    buttons.forEach((button) => {
        button.disabled = !form.checkValidity();
        button.classList.toggle('popup__button_disabled', !form.checkValidity());
    })
};



function resetForm(window) {

    const inputs = window.querySelectorAll('.popup__input');

    inputs.forEach((input) => {
        const errorNode = window.querySelector(`#${input.id}-error`);
        if (errorNode.classList.contains('popup__error_visible')) {
            errorNode.classList.remove('popup__error_visible');
            input.value = '';
        }
    }
    )
};