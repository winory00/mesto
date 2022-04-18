const editButtonLink = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__text');
const formName = document.querySelector('[name="form__name"]');
const formJob = document.querySelector('[name="form__description"]');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_is-active');
    formName.value = nameInput.textContent;
    formJob.value = jobInput.textContent;
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

    nameInput.textContent = formName.value;
    jobInput.textContent = formJob.value;

}

modalWindow.addEventListener('click', onOverlayClick);
editButtonLink.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow);

formElement.addEventListener('submit', formSubmitHandler);

