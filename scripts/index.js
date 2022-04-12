const editButtonLink = document.querySelector('.profile__edit-button');
const ModalWindow = document.querySelector('.popup');
const ModalCloseBtn = ModalWindow.querySelector('.popup__close');

function toggleModalWindow() {
    ModalWindow.classList.toggle('popup_is-active');
}

editButtonLink.addEventListener('click', toggleModalWindow);
ModalCloseBtn.addEventListener('click', toggleModalWindow);

function onOverlayClick(event) {
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget);
    if (event.target === event.currentTarget) {
        toggleModalWindow();
    }
}

ModalWindow.addEventListener('click', onOverlayClick);


const popupForm = document.querySelector('.popup__form');
const textInput = document.querySelector('input');

function onSubmit(e) {
    e.preventDefault();
    console.log('submit', textInput.value);


}

popupForm.addEventListener('submit', onSubmit);


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameInput.value = nameInput.textContent;
    jobInput.value = jobInput.textContent;

}
formElement.addEventListener('submit', formSubmitHandler);


const LikeButtons = document.querySelectorAll('.element__like');

for (let i = 0; i < LikeButtons.length; i++) {
    let ActiveButton = LikeButtons[i];
    ActiveButton.addEventListener('click', function () {
        ActiveButton.classList.toggle('element__like_is-active');
    })

}

