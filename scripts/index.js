const editButtonLink = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('[name="form__name"]');
let jobInput = document.querySelector('[name="form__description"]');
const textInput = document.querySelector('input');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_is-active');
}



function onOverlayClick(event) {
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget);
    if (event.target === event.currentTarget) {
        toggleModalWindow();
    }
}


function formSubmitHandler(evt) {
    evt.preventDefault();

    nameInput.value = nameInput.value.textContent;
    jobInput.value = jobInput.value.textContent;

}

modalWindow.addEventListener('click', onOverlayClick);
editButtonLink.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow);




formElement.addEventListener('submit', formSubmitHandler);

