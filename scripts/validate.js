function toggleButton(form, config) {
    const buttons = document.querySelectorAll(config.submitButtonSelector);
    buttons.forEach((button) => {
        button.disabled = !form.checkValidity();
        button.classList.toggle('popup__button_disabled', !form.checkValidity());
    })

};

function handleFormInput(event, form, config) {
    const input = event.target;
    const errorNodes = document.querySelectorAll(`#${input.id}-error`);
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

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        const inputs = form.querySelectorAll(config.inputSelector);
        form.addEventListener('submit', (event) => handleFormSubmit(event, form));
        inputs.forEach((element) => {
            element.addEventListener('input', (event) => handleFormInput(event, form, config));
        })
        toggleButton(form, config);

    });

}